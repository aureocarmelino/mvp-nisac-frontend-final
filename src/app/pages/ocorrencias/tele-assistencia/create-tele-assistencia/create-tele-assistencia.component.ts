import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Morada } from '../../../../api/models/entity/Morada';
import { TipoNaturezaOcorrencia } from '../../../../api/models/entity/TipoNaturezaOcorrencia';
import { TipoEquipamento } from '../../../../api/models/entity/TipoEquipamento';
import { MenuItem } from 'primeng/api';
import { CreateTeleAssistenciaDto } from '../../../../api/models/dto/CreateTeleAssistenciaDto';
import { FormArray, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { TeleAssistenciaService } from '../../../../api/services/tele-assistencia.service';
import { MoradaService } from '../../../../api/services/morada.service';
import { TrabalhoEfetuadoService } from '../../../../api/services/trabalho-efetuado.service';
import { TipoNaturezaOcorrenciaService } from '../../../../api/services/tipo-natureza-ocorrencia.service';
import { TipoEquipamentoService } from '../../../../api/services/tipo-equipamento.service';
import { GenericCreateService } from '../../../../api/services/generic-create.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { TrabalhoEfetuado } from '../../../../api/models/entity/TrabalhoEfetuado';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { MessageModule } from 'primeng/message';
import { BreadcrumbComponent } from '../../../../components/breadcrumb/breadcrumb.component';
import { InputTextModule } from 'primeng/inputtext';
import { FluidModule } from 'primeng/fluid';
import { SelectModule } from 'primeng/select';
import { TextareaModule } from 'primeng/textarea';
import { MultiSelectModule } from 'primeng/multiselect';
import { TabsModule } from 'primeng/tabs';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { DividerModule } from 'primeng/divider';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { RequiredLabelComponent } from '../../../../components/required-label/required-label.component';
import { SpinnerComponent } from '../../../../components/loader/spinner/spinner.component';
import { DialogModule } from 'primeng/dialog';
import { DatePickerModule } from 'primeng/datepicker';
import { FormControlManagerService } from '../../../../api/services/form-control-manager.service';
import { UtilService } from '../../../../api/services/util.service';
import { format } from 'date-fns';
import { Subject, takeUntil } from 'rxjs';

@Component({
    selector: 'app-create-tele-assistencia',
    imports: [CommonModule, BreadcrumbComponent, InputTextModule, FluidModule,
        ButtonModule, SelectModule, TextareaModule, TabsModule, ToggleSwitchModule,
        MessageModule, MultiSelectModule, RequiredLabelComponent, SpinnerComponent,
        FormsModule, ReactiveFormsModule, AutoCompleteModule, DividerModule, DialogModule, DatePickerModule,
    ],
    templateUrl: './create-tele-assistencia.component.html',
    styleUrl: './create-tele-assistencia.component.scss'
})
export class CreateTeleAssistenciaComponent implements OnInit {

    private destroy$ = new Subject<void>();

    // SINALIZAÇÃO - FORMS
    comoFoiFeitaSinalizacaoViaRadarForm!: FormGroup;
    comoFoiFeitaSinalizacaoViaPresencialForm!: FormGroup;


    // DIALOGS - ATIVIDADES CRIADAS & INFORMAÇÕES INSTITUIÇÃO
    mostrarAtividadesCriadasSinalizacaoViaRadarDialog: boolean = false;
    mostrarInformacoesInstituicaoSinalizacaoViaPresencialDialog: boolean = false;

    projetoRadarForm!: FormGroup;
    filteredMoradas: any[] = [];
    selectedMorada!: Morada;
    moradasItens: Morada[] = [];
    tipoNaturezasItens: TipoNaturezaOcorrencia[] = [];
    tipoEquipamentosItens: TipoEquipamento[] = [];
    items: MenuItem[] | undefined;
    newTeleassistencia: CreateTeleAssistenciaDto = new CreateTeleAssistenciaDto();
    newTeleassistenciaForm!: FormGroup;
    tiposTrabalhosEfectuadosItens: TrabalhoEfetuado[] = [];
    mostrarAtividadesCriadasDialog: boolean = false;

    simOuNaoItens =
        [
            { label: 'Sim', value: true },
            { label: 'Não', value: false }
        ]


    // SINALIZAÇÃO
    mostrarComoFoiFeitaSinalizacao = false;
    mostrarCardAtividadesCriadasSinalizacaoViaRadar = false;
    mostrarCardInformacoesInstituicaoSinalizacaoViaPresencial = false;

    comoFoiFeitaSinalizacaoItens =
        [
            { label: 'Presencial', value: "PRESENCIAL" },
            { label: 'Via Radar', value: "VIA_RADAR" }
        ];

    constructor(public teleAssistenciaService: TeleAssistenciaService,
        public moradaService: MoradaService, public trabalhoEfectuadoService: TrabalhoEfetuadoService,
        public naturezaOcorrenciaService: TipoNaturezaOcorrenciaService, public tipoEquipamentoService: TipoEquipamentoService,
        private toastr: ToastrService, private spinner: NgxSpinnerService, private genericCreateService: GenericCreateService,
        private cdr: ChangeDetectorRef, private fb: FormBuilder, private utilService: UtilService,
        private controlManager: FormControlManagerService, private cdref: ChangeDetectorRef) {

        this.comoFoiFeitaSinalizacaoViaRadarForm = this.fb.group(
            {
                atividadesCriadasSinalizacaoViaRadar: this.fb.array([]) // Inicializa sem atividades
            });

        this.comoFoiFeitaSinalizacaoViaPresencialForm = this.fb.group(
            {
                informacaoInstituicaoSinalizacaoViaPresencial: this.fb.array([]) // Inicializa sem informacoes instituição
            });
    }



    ngOnInit(): void
    {
        this.items =
        [
            { label: "Dashboard", routerLink: '/' },
            { label: 'Ocorrências', routerLink: '/ocorrencias' },
            { label: 'Tele Assistência', routerLink: '/ocorrencia/tele-assistencia' },
            { label: 'Registo', id: "current" }
        ];

        this.loadMorada();
        this.loadTrabalhosEfectuados();
        this.loadTipoNaturezaNaturezaTeleAssistencia();
        this.loadTipoEquipamento();
        this.inicializarTeleAssistenciaFormGroup();

        // PLANO SAUDE METHODS
        this.atualizarInformacaoQuadroPlanoSaude();

        // SINALIZAÇÃO METHODS
        this.atualizarInformacaoFoiFeitaSinalizacao();
        this.atualizarInformacaoComoFoiFeitaSinalizacao()

    }

    inicializarTeleAssistenciaFormGroup() {

        this.newTeleassistenciaForm = new FormGroup({
            morada: new FormControl(''),
            tipoNaturezaOcorrencia: new FormControl(''),
            tipoEquipamento: new FormControl(''),
            trabalhoEfetuado: new FormControl(''),
            nomeCompleto: new FormControl(''),
            numeroProcesso: new FormControl(''),
            idadeMomentoIntervencao: new FormControl(''),
            dataNascimento: new FormControl(''),
            numeroSerieEquipamento: new FormControl(''),
            numeroPolicia: new FormControl(''),
            fracao: new FormControl(''),
            telefoneFixo: new FormControl(''),
            telemovel: new FormControl(''),
            observacoes: new FormControl(''),
            insalubridadeHabitacional: new FormControl(false),

            // ProjetoRadar
            idRadar: new FormControl(''),
            entrevistaRadar: new FormControl(false),


            // PlanoSaudeLisboa65Mais
            numeroPlano: new FormControl({ value: null, disabled: true }),
            jaEutentePlano: new FormControl(false),
            foiRealizadaInscricaoPlano: new FormControl(false),

            // Sinalização
            foiFeitaSinalizacao: new FormControl(null),
            comoFoiFeitaSinalizacao: new FormControl(null),

            // Atividades Complementares:
            atividadeComplementar: new FormControl(false),
            atividadesComplementaresIds: new FormControl([]),

            descricaoTrabalhos: new FormControl(''),


        });
    }




    loadTrabalhosEfectuados() {
        this.trabalhoEfectuadoService.findAllTrabalhoEfetuado().subscribe((res) => {
            this.tiposTrabalhosEfectuadosItens = res;
        }
        )
    }


    filterMorada(event: any) {
        const moradaFiltrada: Morada[] = [];

        const query = event.query;
        for (let i = 0; i < this.moradasItens.length; i++) {
            const morada = this.moradasItens[i];
            if (morada.rua!.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                moradaFiltrada.push(morada);
            }
        }
        this.filteredMoradas = moradaFiltrada;
    }


    loadMorada() {
        this.moradaService.findAll().subscribe((res) => {
            this.moradasItens = res;
        }
        )
    }

    loadTipoNaturezaNaturezaTeleAssistencia() {
        this.naturezaOcorrenciaService.findByGrupoNaturezaId("e6405b75-b3cb-4f78-b663-e0dedeeb085c").subscribe((res) => {
            this.tipoNaturezasItens = res;
        }
        );
    }

    loadTipoEquipamento() {
        this.tipoEquipamentoService.findAllTipoEquipamento().subscribe((res) => {
            this.tipoEquipamentosItens = res;
        }
        );
    }


    /****************************************************** PLANO SAUDE FIELDS  ********************************************/

     atualizarInformacaoQuadroPlanoSaude()
     {
        const jaEutentePlanoCtrl = this.newTeleassistenciaForm.get('jaEutentePlano');
        const foiRealizadaInscricaoPlanoCtrl = this.newTeleassistenciaForm.get('foiRealizadaInscricaoPlano');

        if (!jaEutentePlanoCtrl || !foiRealizadaInscricaoPlanoCtrl) return;

        // Finaliza os antigos (caso existam)
        this.destroy$.next();

        jaEutentePlanoCtrl.valueChanges
            .pipe(takeUntil(this.destroy$))
            .subscribe((isUtente: boolean) => {
            if (isUtente) {
                if (foiRealizadaInscricaoPlanoCtrl.value !== false) {
                foiRealizadaInscricaoPlanoCtrl.setValue(false, { emitEvent: false });
                }
                this.controlManager.enableControls(this.newTeleassistenciaForm, ['numeroPlano']);
            } else {
                this.controlManager.disableAndReset(this.newTeleassistenciaForm, ['numeroPlano']);
            }
            });

        foiRealizadaInscricaoPlanoCtrl.valueChanges
            .pipe(takeUntil(this.destroy$))
            .subscribe((foiInscrito: boolean) => {
            if (foiInscrito) {
                if (jaEutentePlanoCtrl.value !== false) {
                jaEutentePlanoCtrl.setValue(false, { emitEvent: false });
                }
                this.controlManager.disableAndReset(this.newTeleassistenciaForm, ['numeroPlano']);
            }
            });
    }
    /*
    atualizarInformacaoQuadroPlanoSaude() {
        const jaEutentePlanoCtrl = this.newTeleassistenciaForm.get('jaEutentePlano');
        const foiRealizadaInscricaoPlanoCtrl = this.newTeleassistenciaForm.get('foiRealizadaInscricaoPlano');

        if (!jaEutentePlanoCtrl || !foiRealizadaInscricaoPlanoCtrl) return;

        jaEutentePlanoCtrl.valueChanges.subscribe((isUtente: boolean) => {
            if (isUtente) {
                // Desmarca o outro
                foiRealizadaInscricaoPlanoCtrl.setValue(false, { emitEvent: false });
                this.controlManager.enableControls(this.newTeleassistenciaForm, ['numeroPlano']);
            }
            else {
                if (!foiRealizadaInscricaoPlanoCtrl.value) {
                    jaEutentePlanoCtrl.setValue(true, { emitEvent: false });
                }
                else {
                    this.controlManager.disableAndReset(this.newTeleassistenciaForm, ['numeroPlano']);
                }
            }
        });

        foiRealizadaInscricaoPlanoCtrl.valueChanges.subscribe((foiInscrito: boolean) => {
            if (foiInscrito) {
                jaEutentePlanoCtrl.setValue(false, { emitEvent: false });
                this.controlManager.disableAndReset(this.newTeleassistenciaForm, ['numeroPlano']);
            }
            else {
                if (!jaEutentePlanoCtrl.value) {
                    foiRealizadaInscricaoPlanoCtrl.setValue(true, { emitEvent: false });
                }
            }
        });
    }*/

    /****************************************************** SINALIZAÇÃO FIELDS  ********************************************/

    atualizarInformacaoFoiFeitaSinalizacao() {
        this.newTeleassistenciaForm.get('foiFeitaSinalizacao')!.valueChanges.subscribe((value) => {

            if (value === true) {
                this.mostrarComoFoiFeitaSinalizacao = true;
                this.newTeleassistenciaForm.get('comoFoiFeitaSinalizacao')!.setValidators(Validators.required);
            }
            else {
                this.mostrarComoFoiFeitaSinalizacao = false;
                this.newTeleassistenciaForm.get('comoFoiFeitaSinalizacao')!.clearValidators();
                this.newTeleassistenciaForm.get('comoFoiFeitaSinalizacao')!.reset();
                this.newTeleassistenciaForm.get('comoFoiFeitaSinalizacao')!.updateValueAndValidity();
            }
        });
    }

    atualizarInformacaoComoFoiFeitaSinalizacao() {

        this.newTeleassistenciaForm.get('comoFoiFeitaSinalizacao')!.valueChanges.subscribe((value) => {
            if (value === 'VIA_RADAR') {
                this.mostrarCardAtividadesCriadasSinalizacaoViaRadar = true;
                this.mostrarCardInformacoesInstituicaoSinalizacaoViaPresencial = false;
                this.formInformacoesInstituicaoSinalizacaoPresencial.clear();

            }
            else {
                this.mostrarCardAtividadesCriadasSinalizacaoViaRadar = false;
                this.mostrarCardInformacoesInstituicaoSinalizacaoViaPresencial = true;
                this.formAtividadesCriadasSinalizacaoViaRadar.clear();
            }
        });
    }


    openAtividadesCriadasSinalizacaoViaRadarDialog() {
        this.mostrarAtividadesCriadasSinalizacaoViaRadarDialog = true;
        this.cdr.detectChanges(); // Força a atualização
    }

    openInformacoesInstituicaoSinalizacaoViaPresencialDialog() {
        this.mostrarInformacoesInstituicaoSinalizacaoViaPresencialDialog = true;
        this.cdr.detectChanges(); // Força a atualização
    }

    closeAtividadesCriadasSinalizacaoViaRadarDialog(event?: Event) {

        // Aqui fecha e salva de fato
        // Se foi fechado por um clique no botão "Check", não limpa os campos
        if (event) {
            this.mostrarAtividadesCriadasSinalizacaoViaRadarDialog = false;
            this.formAtividadesCriadasSinalizacaoViaRadar.clear()
            this.comoFoiFeitaSinalizacaoViaRadarForm.reset();
            this.comoFoiFeitaSinalizacaoViaRadarForm.updateValueAndValidity();

            return;

        }

        if (!this.comoFoiFeitaSinalizacaoViaRadarForm.valid || !this.ultimaAtividadeEhValida()) {
            this.comoFoiFeitaSinalizacaoViaRadarForm.markAllAsTouched(); // Isso mostra os erros
            this.toastr.error('Preencha os campos obrigatórios.', 'Formulário incompleto', {
                progressBar: true,
            });

            return; // Impede fechar se o formulário estiver inválido
        }

        this.mostrarAtividadesCriadasSinalizacaoViaRadarDialog = false;
    }

    closeInformacoesInstituicaoSinalizacaoViaPresencialDialog(event?: Event) {

        // Aqui fecha e salva de fato
        // Se foi fechado por um clique no botão "Check", não limpa os campos
        if (event) {
            this.mostrarInformacoesInstituicaoSinalizacaoViaPresencialDialog = false;
            this.formInformacoesInstituicaoSinalizacaoPresencial.clear()
            this.comoFoiFeitaSinalizacaoViaPresencialForm.reset();
            this.comoFoiFeitaSinalizacaoViaPresencialForm.updateValueAndValidity();

            return;
        }

        if (!this.comoFoiFeitaSinalizacaoViaPresencialForm.valid || !this.ultimaInformacaoInstituicaoEhValida()) {
            this.comoFoiFeitaSinalizacaoViaPresencialForm.markAllAsTouched(); // Isso mostra os erros
            this.toastr.error('Preencha os campos obrigatórios.', 'Formulário incompleto', { progressBar: true, });
            return; // Impede fechar se o formulário estiver inválido
        }
        this.mostrarInformacoesInstituicaoSinalizacaoViaPresencialDialog = false;
    }


    add(event: Event): void {
        event.preventDefault();

        this.setCreateTeleAssistenciaDto() // Configuração específica para o formulário atual

        console.log(this.newTeleassistencia)

        if (this.newTeleassistenciaForm.valid)
        {
            this.genericCreateService.executeWithHandling(
                this.teleAssistenciaService.create(this.newTeleassistencia), 'Tele Assistência criada com sucesso'
            ).subscribe(
                {
                    next: () => this.resetFormulario(),
                    error: () => this.toastr.error("Erro ao criar tele assistência")
                });
        }
        else
        {
            this.spinner.hide();
            this.genericCreateService.messageErrorInvalidForm("Verifique se todos os campos estão preenchidos correctamente")
        }

    }


    setCreateTeleAssistenciaDto()
    {
        const moradaValue = this.newTeleassistenciaForm.get('morada')?.value;
        this.newTeleassistencia.moradaId = (moradaValue && typeof moradaValue === 'object') ? moradaValue.id : '';

        const tipoNaturezaValue = this.newTeleassistenciaForm.get('tipoNaturezaOcorrencia')?.value;
        this.newTeleassistencia.tipoNaturezaOcorrenciaId = (tipoNaturezaValue && typeof tipoNaturezaValue === 'object') ? tipoNaturezaValue.id : tipoNaturezaValue ?? '';

        const tipoEquipamentoValue = this.newTeleassistenciaForm.get('tipoEquipamento')?.value;
        this.newTeleassistencia.tipoEquipamentoId = (tipoEquipamentoValue && typeof tipoEquipamentoValue === 'object') ? tipoEquipamentoValue.id : tipoEquipamentoValue ?? '';

        const trabalhoEfetuadoValue = this.newTeleassistenciaForm.get('trabalhoEfetuado')?.value;
        this.newTeleassistencia.trabalhoEfectuadoId = (trabalhoEfetuadoValue && typeof trabalhoEfetuadoValue === 'object') ? trabalhoEfetuadoValue.id : trabalhoEfetuadoValue ?? '';



        this.newTeleassistencia.nomeCompleto = this.newTeleassistenciaForm.get('nomeCompleto')?.value ?? '';

        this.newTeleassistencia.idadeMomentoIntervencao = this.newTeleassistenciaForm.get('idadeMomentoIntervencao')?.value ?? '';

        // Garantir que o valor de dataNascimento seja formatado corretamente
        const dataNascimentoValue = this.newTeleassistenciaForm.get('dataNascimento')?.value;
        this.newTeleassistencia.dataNascimento = dataNascimentoValue ? format(dataNascimentoValue, 'yyyy-MM-dd') : '';

        this.newTeleassistencia.numeroProcesso = this.newTeleassistenciaForm.get('numeroProcesso')?.value ?? '';

        this.newTeleassistencia.numeroSerieEquipamento = this.newTeleassistenciaForm.get('numeroSerieEquipamento')?.value ?? '';
        this.newTeleassistencia.numeroPolicia = this.newTeleassistenciaForm.get('numeroPolicia')?.value ?? '';
        this.newTeleassistencia.fracao = this.newTeleassistenciaForm.get('fracao')?.value ?? '';
        this.newTeleassistencia.telefoneFixo = this.newTeleassistenciaForm.get('telefoneFixo')?.value ?? '';
        this.newTeleassistencia.telemovel = this.newTeleassistenciaForm.get('telemovel')?.value ?? '';
        this.newTeleassistencia.observacoes = this.newTeleassistenciaForm.get('observacoes')?.value ?? '';


        // PROJETO RADAR
        this.newTeleassistencia.idRadar = this.newTeleassistenciaForm.get('idRadar')?.value ?? '';
        this.newTeleassistencia.entrevistaRadar = this.newTeleassistenciaForm.get('entrevistaRadar')?.value ?? '';


        // PLANO SAÚDE 65+
        this.newTeleassistencia.numeroPlano = this.newTeleassistenciaForm.get('numeroPlano')?.value ?? '';
        this.newTeleassistencia.jaEutentePlano = this.newTeleassistenciaForm.get('jaEutentePlano')?.value ?? '';
        this.newTeleassistencia.foiRealizadaInscricaoPlano = this.newTeleassistenciaForm.get('foiRealizadaInscricaoPlano')?.value ?? '';


        // Sinalização
        this.newTeleassistencia.foiFeitaSinalizacao = this.newTeleassistenciaForm.get('foiFeitaSinalizacao')?.value ?? '';
        this.newTeleassistencia.comoFoiFeitaSinalizacao = this.newTeleassistenciaForm.get('comoFoiFeitaSinalizacao')?.value ?? '';


        // ** Adicionando as atividades criadas via radar ** //
        const atividadesCriadasSinalizacaoViaRadar = this.formAtividadesCriadasSinalizacaoViaRadar.value;  // Coleta os valores do FormArray
        this.newTeleassistencia.atividadesCriadaSinalizacaoViaRadarLista = atividadesCriadasSinalizacaoViaRadar;  // Adiciona no objeto

        // ** Adicionando as informacoes da instituição via presencial ** //
        const informacoesInstituicaoSinalizacaoPresencial = this.formInformacoesInstituicaoSinalizacaoPresencial.value;  // Coleta os valores do FormArray
        this.newTeleassistencia.informacaoInstituicaoSinalizacaoViaPresencialLista = informacoesInstituicaoSinalizacaoPresencial;  // Adiciona no objeto

    }


    resetFormulario() {

        /*this.newTeleassistencia = {
            morada: '',
            tipoNaturezaOcorrencia: '',
            tipoEquipamento: '',
            trabalhoEfectuado: '',
            nomeCompleto: '',
            numeroSerieEquipamento: '',
            numeroPolicia: '',
            fracao: '',
            telefone: '',
            observacoes: ''
        };*/
        this.newTeleassistenciaForm.reset(this.newTeleassistencia);
        this.atualizarInformacaoQuadroPlanoSaude();
    }

    // Getter para facilitar o acesso ao FormArray
    get atividadesCriadas(): FormArray {
        return this.projetoRadarForm.get('atividadesCriadas') as FormArray;
    }


    // Getter para facilitar o acesso ao FormArray das atividades criadas
    get formAtividadesCriadasSinalizacaoViaRadar(): FormArray {
        return this.comoFoiFeitaSinalizacaoViaRadarForm.get('atividadesCriadasSinalizacaoViaRadar') as FormArray;
    }

    // Getter para facilitar o acesso ao FormArray das informações da instituição
    get formInformacoesInstituicaoSinalizacaoPresencial(): FormArray {
        return this.comoFoiFeitaSinalizacaoViaPresencialForm.get('informacaoInstituicaoSinalizacaoViaPresencial') as FormArray;
    }

    // Adicionar nova atividade
    adicionarAtividade() {
        const atividades = this.formAtividadesCriadasSinalizacaoViaRadar;

        // Se já existe alguma atividade, validar a última
        if (atividades.length > 0) {
            const ultimaAtividade = atividades.at(atividades.length - 1) as FormGroup;

            if (ultimaAtividade.invalid) {
                ultimaAtividade.markAllAsTouched(); // Para mostrar erros no template, se quiser
                return; // Impede adicionar nova se a última não está válida
            }
        }

        // Se chegou aqui, pode adicionar nova atividade
        const novaAtividadeForm = this.fb.group(
            {
                tipoAtividadeCriada: ['', Validators.required],
                entidade: ['', Validators.required],
                grupoDeNaturezaOrigem: 'APOIO_SOCIAL'
            });
        atividades.push(novaAtividadeForm);
    }

    adicionarInformacaoInstituicao() {
        const informacaoInstituicao = this.formInformacoesInstituicaoSinalizacaoPresencial;

        // Se já existe alguma informacao da Instituicao, validar a última
        if (informacaoInstituicao.length > 0) {
            const ultimaInformacaoInstituicao = informacaoInstituicao.at(informacaoInstituicao.length - 1) as FormGroup;

            if (informacaoInstituicao.invalid) {
                informacaoInstituicao.markAllAsTouched(); // Para mostrar erros no template, se quiser
                return; // Impede adicionar nova se a última não está válida
            }
        }

        // Se chegou aqui, pode adicionar nova atividade
        const novaInformacaoInstituicaoForm = this.fb.group(
            {
                nomeInstituicao: ['', Validators.required],
                nomeResponsavel: ['', Validators.required],
                grupoDeNaturezaOrigem: 'TELE_ASSISTENCIA'
            });

        informacaoInstituicao.push(novaInformacaoInstituicaoForm);
    }

    ultimaAtividadeEhValida(): boolean {
        const atividades = this.formAtividadesCriadasSinalizacaoViaRadar;
        if (atividades.length === 0) {
            return true; // Pode adicionar a primeira
        }

        const ultima = atividades.at(atividades.length - 1) as FormGroup;
        return ultima.valid;
    }

    ultimaInformacaoInstituicaoEhValida(): boolean {
        const informacaoInstituicao = this.formInformacoesInstituicaoSinalizacaoPresencial;
        if (informacaoInstituicao.length === 0) {
            return true; // Pode adicionar a primeira
        }

        const ultima = informacaoInstituicao.at(informacaoInstituicao.length - 1) as FormGroup;
        return ultima.valid;
    }

    // Remover atividade pelo índice
    removerAtividade(index: number) {
        this.formAtividadesCriadasSinalizacaoViaRadar.removeAt(index);
    }

    // Remover informacao instituicao pelo índice
    removerInformacaoInstituicao(index: number) {
        this.formInformacoesInstituicaoSinalizacaoPresencial.removeAt(index);
    }

    // Simulação de envio do formulário
    salvar() {
        console.log('Dados enviados:', this.projetoRadarForm.value);
    }

    openAtividadesCriadasDialog() {
        this.mostrarAtividadesCriadasDialog = true;
        this.cdr.detectChanges(); // Força a atualização
    }

    closeAtividadesCriadasDialog(event?: Event) {
        // Se foi fechado por um clique no botão "Check", não limpa os campos
        if (event) {
            console.log("LIMPOU TUDO mostrarRecebeApoioDialog")
        }

        this.mostrarAtividadesCriadasDialog = false;
    }
}

