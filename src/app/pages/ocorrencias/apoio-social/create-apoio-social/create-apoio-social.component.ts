import { Component, OnInit, SimpleChanges } from '@angular/core';
import { BreadcrumbComponent } from '../../../../components/breadcrumb/breadcrumb.component';
import { InputTextModule } from 'primeng/inputtext';
import { FluidModule } from 'primeng/fluid';
import { ButtonModule } from 'primeng/button';
import { SelectModule } from 'primeng/select';
import { FormControl, FormsModule } from '@angular/forms';
import { TextareaModule } from 'primeng/textarea';
import { MenuItem } from 'primeng/api';
import { TabsModule } from 'primeng/tabs';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { DividerModule } from 'primeng/divider';
import { MessageModule } from 'primeng/message';
import { CommonModule } from '@angular/common';
import { MultiSelectModule } from 'primeng/multiselect';
import { RequiredLabelComponent } from '../../../../components/required-label/required-label.component';
import { SpinnerComponent } from '../../../../components/loader/spinner/spinner.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { DialogModule } from 'primeng/dialog';
import { ChangeDetectorRef } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Morada } from '../../../../api/models/entity/Morada';
import { TipoNaturezaOcorrencia } from '../../../../api/models/entity/TipoNaturezaOcorrencia';
import { CreateApoioSocialDto } from '../../../../api/models/dto/CreateApoioSocialDto';
import { ApoioSocialService } from '../../../../api/services/apoio-social.service';
import { MoradaService } from '../../../../api/services/morada.service';
import { TipoNaturezaOcorrenciaService } from '../../../../api/services/tipo-natureza-ocorrencia.service';
import { ToastrService } from 'ngx-toastr';
import { GenericCreateService } from '../../../../api/services/generic-create.service';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { DatePickerModule } from 'primeng/datepicker';
import { UtilService } from '../../../../api/services/util.service';
import { FormControlManagerService } from '../../../../api/services/form-control-manager.service';

import { format } from 'date-fns';
import { AtividadeComplementar } from '../../../../api/models/entity/AtividadeComplementar';
import { AtividadeComplementarService } from '../../../../api/services/atividade-complementar.service';
import { PrimeNG } from 'primeng/config';
import { Subject, takeUntil } from 'rxjs';

@Component({
    selector: 'app-create-apoio-social',
    imports: [CommonModule, BreadcrumbComponent, InputTextModule, FluidModule,
        ButtonModule, SelectModule, FormsModule, TextareaModule, TabsModule, ToggleSwitchModule, DividerModule,
        MessageModule, MultiSelectModule, RequiredLabelComponent, SpinnerComponent, DialogModule, CommonModule, InputTextModule, ButtonModule,
        FormsModule, ReactiveFormsModule, AutoCompleteModule, DatePickerModule],

    templateUrl: './create-apoio-social.component.html',
    styleUrl: './create-apoio-social.component.scss'
})
export class CreateApoioSocialComponent implements OnInit
{
    private destroy$ = new Subject<void>();


    // SINALIZAÇÃO - FORMS
    comoFoiFeitaSinalizacaoViaRadarForm!: FormGroup;
    comoFoiFeitaSinalizacaoViaPresencialForm!: FormGroup;


    // DIALOGS - ATIVIDADES CRIADAS & INFORMAÇÕES INSTITUIÇÃO
    mostrarAtividadesCriadasSinalizacaoViaRadarDialog: boolean = false;
    mostrarInformacoesInstituicaoSinalizacaoViaPresencialDialog: boolean = false;


    moradasItens: Morada[] = [];
    atividadesComplementaresItens : AtividadeComplementar[] = [];
    tipoNaturezasItens: TipoNaturezaOcorrencia[] = [];
    generoItens: string[] = ['Masculino', 'Feminino'];
    newApoioSocial: CreateApoioSocialDto = new CreateApoioSocialDto();
    newApoioSocialForm!: FormGroup;
    filteredMoradas: any[] = [];
    selectedMorada!: Morada;
    itemsMenu: MenuItem[] | undefined;

    simOuNaoItens =
    [
        { label: 'Sim', value: true },
        { label: 'Não', value: false }
    ]

    // QUADRO STA
    mostrarReuneRequisitosQuadroSTA = false;
    mostrarMotivoNaoReunirRequisitosQuadroSTA = false;


    // SINALIZAÇÃO
    mostrarComoFoiFeitaSinalizacao = false;
    mostrarCardAtividadesCriadasSinalizacaoViaRadar = false;
    mostrarCardInformacoesInstituicaoSinalizacaoViaPresencial = false;

    comoFoiFeitaSinalizacaoItens =
    [
        { label: 'Presencial', value: "PRESENCIAL" },
        { label: 'Via Radar', value: "VIA_RADAR" }
    ];


    constructor(public apoioSocialService: ApoioSocialService, public moradaService: MoradaService,
        public atividadeComplementarService : AtividadeComplementarService,
        public naturezaOcorrenciaService: TipoNaturezaOcorrenciaService,
        private toastr: ToastrService, private spinner: NgxSpinnerService, private genericCreateService: GenericCreateService,
        private cdr: ChangeDetectorRef, private fb: FormBuilder, private  utilService: UtilService,
        private controlManager: FormControlManagerService, private cdref: ChangeDetectorRef, private primeng: PrimeNG)
        {
            this.comoFoiFeitaSinalizacaoViaRadarForm = this.fb.group(
            {
                atividadesCriadasSinalizacaoViaRadar: this.fb.array([]) // Inicializa sem atividades
            });

            this.comoFoiFeitaSinalizacaoViaPresencialForm = this.fb.group(
            {
                informacaoInstituicaoSinalizacaoViaPresencial: this.fb.array([]) // Inicializa sem informacoes instituição
            });

            this.primeng.setTranslation({
                firstDayOfWeek: 0,
                dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
                dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
                dayNamesMin: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
                monthNames: [
                  'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
                  'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
                ],
                monthNamesShort: [
                  'Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun',
                  'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'
                ],
                today: 'Hoje',
                clear: 'Limpar',
                weekHeader: 'Sem',
                dateFormat: 'dd/mm/yy'
              });

        }


    ngOnInit(): void
    {
      this.itemsMenu =
      [
        { label: "Dashboard", routerLink: '/'},
        { label: 'Ocorrências', routerLink: '/ocorrencias'},
        { label: 'Apoio Social', routerLink: '/ocorrencia/apoio-social'},
        { label: 'Registo', id: "current"}
      ];

      this.loadMorada();
      this.loadTipoNaturezaNaturezaApoioSocial();
      this.loadAtividadeComplementar();
      this.inicializarApoioSocialFormGroup();


      // STA METHODS
      this.atualizarInformacaoNecesitaSta();
      this.atualizarInformacaoReuneRequisitosSta();

      // PLANO SAUDE METHODS
      this.atualizarInformacaoQuadroPlanoSaude();


      // SINALIZAÇÃO METHODS
      this.atualizarInformacaoFoiFeitaSinalizacao();
      this.atualizarInformacaoComoFoiFeitaSinalizacao()
    }



    inicializarApoioSocialFormGroup()
    {
        this.newApoioSocialForm = new FormGroup({

            nomeCompleto: new FormControl(''),
            genero: new FormControl(''),
            idadeMomentoIntervencao: new FormControl(''),
            dataNascimento: new FormControl(''),
            moradaId: new FormControl(''),
            tipoNaturezaOcorrenciaId: new FormControl(''),
            numeroPolicia: new FormControl(''),
            fracao: new FormControl(''),
            telefone: new FormControl(''),
            noSeguimentoDaOcorrenciaNumero: new FormControl(''),

            // Kit Emergência
            kitEmergenciaSocial: new FormControl(false),
            monitorizacao: new FormControl(false),

            insalubridadeHabitacional: new FormControl(false),

            // ProjetoRadar
            idRadar: new FormControl(''),
            entrevistaRadar: new FormControl(false),

            // QuadroSta
            numeroProcessoSta: new FormControl(''),
            necessitaSta: new FormControl(null),
            reuneRequisitosNecessitaSta: new FormControl(null),
            motivoNaoReunirRequisitosSta: new FormControl(null),

            // PlanoSaudeLisboa65Mais
            numeroPlano: new FormControl({ value: null, disabled: true }),
            jaEutentePlano: new FormControl(false),
            foiRealizadaInscricaoPlano: new FormControl(false),

            // Sinalização
            foiFeitaSinalizacao: new FormControl(null),
            comoFoiFeitaSinalizacao: new FormControl(null),

            // Atividades Complementares:
            atividadeComplementar:  new FormControl(false),
            atividadesComplementaresIds: new FormControl([]),

            descricaoTrabalhos: new FormControl(''),
        });
    }


    filtrarMorada(event: any)
    {
        const moradaFiltrada: Morada[] = [];
        const query = event.query;

        for (let i = 0; i < this.moradasItens.length; i++)
        {
            const morada = this.moradasItens[i];

            if (morada.rua!.toLowerCase().indexOf(query.toLowerCase()) == 0)
            {
                moradaFiltrada.push(morada);
            }
        }
        this.filteredMoradas = moradaFiltrada;
    }

    loadMorada()
    {
        this.moradaService.findAll().subscribe((res) =>
        {
            this.moradasItens = res;
        });
    }

    loadTipoNaturezaNaturezaApoioSocial()
    {
        this.naturezaOcorrenciaService.findByGrupoNaturezaId("4ce5171d-8c41-4236-bda9-87f41e282db3").subscribe((res) =>
        {
            this.tipoNaturezasItens = res;
        });
    }

    loadAtividadeComplementar()
    {
        this.atividadeComplementarService.findAll().subscribe((res) =>
        {
            this.atividadesComplementaresItens = res;
        });
    }



    /****************************************************** QUADRO STA FIELDS  *********************************************/

    atualizarInformacaoNecesitaSta()
    {
        this.newApoioSocialForm.get('necessitaSta')!.valueChanges.subscribe((value) =>
        {

            if (value === true)
            {
                this.mostrarReuneRequisitosQuadroSTA = true;
            }
            else
            {
                this.mostrarReuneRequisitosQuadroSTA = false;
                this.newApoioSocialForm.get('reuneRequisitosNecessitaSta')!.reset();
            }
        });
    }

    atualizarInformacaoReuneRequisitosSta()
    {

        this.newApoioSocialForm.get('reuneRequisitosNecessitaSta')!.valueChanges.subscribe((value) =>
        {
            // Quando a resposta for "Não", mostramos o campo de motivo
            if (value === false)
            {
                this.mostrarMotivoNaoReunirRequisitosQuadroSTA = true;
                this.newApoioSocialForm.get('motivoNaoReunirRequisitosSta')!.setValidators(Validators.required);
            }
            else
            {
                this.mostrarMotivoNaoReunirRequisitosQuadroSTA = false;

                // Se for "Sim", limpar o campo motivo caso tenha alguma coisa

                this.newApoioSocialForm.get('motivoNaoReunirRequisitosSta')!.clearValidators();
                this.newApoioSocialForm.get('motivoNaoReunirRequisitosSta')!.reset();
                this.newApoioSocialForm.get('motivoNaoReunirRequisitosSta')!.updateValueAndValidity();
            }
        });
    }


    /****************************************************** PLANO SAUDE FIELDS  ********************************************/

   /* atualizarInformacaoQuadroPlanoSaude()
    {
        const jaEutentePlanoCtrl = this.newApoioSocialForm.get('jaEutentePlano');
        const foiRealizadaInscricaoPlanoCtrl = this.newApoioSocialForm.get('foiRealizadaInscricaoPlano');

        if (!jaEutentePlanoCtrl || !foiRealizadaInscricaoPlanoCtrl) return;

        jaEutentePlanoCtrl.valueChanges.subscribe((isUtente: boolean) =>
        {
            if (isUtente)
            {
                // Desmarca o outro
                foiRealizadaInscricaoPlanoCtrl.setValue(false, { emitEvent: false });
                this.controlManager.enableControls(this.newApoioSocialForm, ['numeroPlano']);
            }
            else
            {
                if (!foiRealizadaInscricaoPlanoCtrl.value)
                {
                    jaEutentePlanoCtrl.setValue(true, { emitEvent: false });
                }
                else
                {
                    this.controlManager.disableAndReset(this.newApoioSocialForm, ['numeroPlano']);
                }
            }
        });

        foiRealizadaInscricaoPlanoCtrl.valueChanges.subscribe((foiInscrito: boolean) =>
        {
            if (foiInscrito)
            {
                jaEutentePlanoCtrl.setValue(false, { emitEvent: false });
                this.controlManager.disableAndReset(this.newApoioSocialForm, ['numeroPlano']);
            }
            else
            {
                if (!jaEutentePlanoCtrl.value)
                {
                    foiRealizadaInscricaoPlanoCtrl.setValue(true, { emitEvent: false });
                }
            }
        });
    }
    */

    atualizarInformacaoQuadroPlanoSaude() {
        const jaEutentePlanoCtrl = this.newApoioSocialForm.get('jaEutentePlano');
        const foiRealizadaInscricaoPlanoCtrl = this.newApoioSocialForm.get('foiRealizadaInscricaoPlano');

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
              this.controlManager.enableControls(this.newApoioSocialForm, ['numeroPlano']);
            } else {
              this.controlManager.disableAndReset(this.newApoioSocialForm, ['numeroPlano']);
            }
          });

        foiRealizadaInscricaoPlanoCtrl.valueChanges
          .pipe(takeUntil(this.destroy$))
          .subscribe((foiInscrito: boolean) => {
            if (foiInscrito) {
              if (jaEutentePlanoCtrl.value !== false) {
                jaEutentePlanoCtrl.setValue(false, { emitEvent: false });
              }
              this.controlManager.disableAndReset(this.newApoioSocialForm, ['numeroPlano']);
            }
          });
      }


    /****************************************************** SINALIZAÇÃO FIELDS  ********************************************/

    atualizarInformacaoFoiFeitaSinalizacao()
    {
          this.newApoioSocialForm.get('foiFeitaSinalizacao')!.valueChanges.subscribe((value) => {

            if (value === true)
            {
              this.mostrarComoFoiFeitaSinalizacao = true;
              this.newApoioSocialForm.get('comoFoiFeitaSinalizacao')!.setValidators(Validators.required);
            }
            else
            {
              this.mostrarComoFoiFeitaSinalizacao = false;
              this.newApoioSocialForm.get('comoFoiFeitaSinalizacao')!.clearValidators();
              this.newApoioSocialForm.get('comoFoiFeitaSinalizacao')!.reset();
              this.newApoioSocialForm.get('comoFoiFeitaSinalizacao')!.updateValueAndValidity();
            }
          });
    }

    atualizarInformacaoComoFoiFeitaSinalizacao()
    {

        this.newApoioSocialForm.get('comoFoiFeitaSinalizacao')!.valueChanges.subscribe((value) =>
        {
            if (value === 'VIA_RADAR')
            {
                this.mostrarCardAtividadesCriadasSinalizacaoViaRadar = true;
                this.mostrarCardInformacoesInstituicaoSinalizacaoViaPresencial = false;
                this.formInformacoesInstituicaoSinalizacaoPresencial.clear();

            }
            else
            {
                this.mostrarCardAtividadesCriadasSinalizacaoViaRadar = false;
                this.mostrarCardInformacoesInstituicaoSinalizacaoViaPresencial = true;
                this.formAtividadesCriadasSinalizacaoViaRadar.clear();
            }
      });
    }

    openAtividadesCriadasSinalizacaoViaRadarDialog()
    {
        this.mostrarAtividadesCriadasSinalizacaoViaRadarDialog = true;
        this.cdr.detectChanges(); // Força a atualização
    }

    openInformacoesInstituicaoSinalizacaoViaPresencialDialog()
    {
        this.mostrarInformacoesInstituicaoSinalizacaoViaPresencialDialog = true;
        this.cdr.detectChanges(); // Força a atualização
    }

    closeAtividadesCriadasSinalizacaoViaRadarDialog(event?: Event)
    {

       // Aqui fecha e salva de fato
        // Se foi fechado por um clique no botão "Check", não limpa os campos
        if (event)
        {
            this.mostrarAtividadesCriadasSinalizacaoViaRadarDialog = false;
            this.formAtividadesCriadasSinalizacaoViaRadar.clear()
            this.comoFoiFeitaSinalizacaoViaRadarForm.reset();
            this.comoFoiFeitaSinalizacaoViaRadarForm.updateValueAndValidity();

            return ;

        }

        if (!this.comoFoiFeitaSinalizacaoViaRadarForm.valid || !this.ultimaAtividadeEhValida())
        {
            this.comoFoiFeitaSinalizacaoViaRadarForm.markAllAsTouched(); // Isso mostra os erros
            this.toastr.error('Preencha os campos obrigatórios.', 'Formulário incompleto', {
                progressBar: true,
                });

            return; // Impede fechar se o formulário estiver inválido
        }

        this.mostrarAtividadesCriadasSinalizacaoViaRadarDialog = false;
    }

    closeInformacoesInstituicaoSinalizacaoViaPresencialDialog(event?: Event)
    {

       // Aqui fecha e salva de fato
        // Se foi fechado por um clique no botão "Check", não limpa os campos
        if (event)
        {
            this.mostrarInformacoesInstituicaoSinalizacaoViaPresencialDialog = false;
            this.formInformacoesInstituicaoSinalizacaoPresencial.clear()
            this.comoFoiFeitaSinalizacaoViaPresencialForm.reset();
            this.comoFoiFeitaSinalizacaoViaPresencialForm.updateValueAndValidity();

            return ;
        }

        if (!this.comoFoiFeitaSinalizacaoViaPresencialForm.valid || !this.ultimaInformacaoInstituicaoEhValida())
        {
            this.comoFoiFeitaSinalizacaoViaPresencialForm.markAllAsTouched(); // Isso mostra os erros
            this.toastr.error('Preencha os campos obrigatórios.', 'Formulário incompleto', {progressBar: true,});
            return; // Impede fechar se o formulário estiver inválido
        }
        this.mostrarInformacoesInstituicaoSinalizacaoViaPresencialDialog = false;
    }


    add(event: Event): void
    {
        event.preventDefault();

        this.setCreateApoioSocial(); // Configuração específica para o formulário atual

       // console.log(this.newApoioSocial)

        if (this.newApoioSocialForm.valid)
        {
            this.genericCreateService.executeWithHandling(
                this.apoioSocialService.createApoioSocial(this.newApoioSocial), 'Apoio social criado com sucesso'
            ).subscribe(
                {
                    next: () => this.resetFormulario(),
                    error: () => this.toastr.error('Erro ao criar apoio social') // Erro tratado pelo BaseService
                });
        }
        else
        {
            this.spinner.hide();
            this.genericCreateService.messageErrorInvalidForm("Verifique se todos os campos estão preenchidos correctamente")
        }
    }

    setCreateApoioSocial()
    {
        this.newApoioSocial.nomeCompleto = this.newApoioSocialForm.get('nomeCompleto')?.value ?? '';
        this.newApoioSocial.genero = this.newApoioSocialForm.get('genero')?.value ?? '';
        this.newApoioSocial.idadeMomentoIntervencao = this.newApoioSocialForm.get('idadeMomentoIntervencao')?.value ?? '';

        // Garantir que o valor de dataNascimento seja formatado corretamente
        const dataNascimentoValue = this.newApoioSocialForm.get('dataNascimento')?.value;
        this.newApoioSocial.dataNascimento = dataNascimentoValue ? format(dataNascimentoValue, 'yyyy-MM-dd') : '';

        this.newApoioSocial.moradaId = this.newApoioSocialForm.get('moradaId')?.value.id ?? '';
        this.newApoioSocial.tipoNaturezaOcorrenciaId = this.newApoioSocialForm.get('tipoNaturezaOcorrenciaId')?.value.id ?? '';
        this.newApoioSocial.numeroPolicia = this.newApoioSocialForm.get('numeroPolicia')?.value ?? '';
        this.newApoioSocial.fracao = this.newApoioSocialForm.get('fracao')?.value ?? '';
        this.newApoioSocial.telefone = this.newApoioSocialForm.get('telefone')?.value ?? '';
        this.newApoioSocial.noSeguimentoDaOcorrenciaNumero = this.newApoioSocialForm.get('noSeguimentoDaOcorrenciaNumero')?.value ?? '';
        this.newApoioSocial.kitEmergenciaSocial = this.newApoioSocialForm.get('kitEmergenciaSocial')?.value ?? false;
        this.newApoioSocial.quantidadeKitEmergenciaSocial = this.newApoioSocial.kitEmergenciaSocial ? '1' : '0';
        this.newApoioSocial.monitorizacao = this.newApoioSocialForm.get('monitorizacao')?.value ?? false;
        this.newApoioSocial.insalubridadeHabitacional = this.newApoioSocialForm.get('insalubridadeHabitacional')?.value ?? false;


        // PROJETO RADAR
        this.newApoioSocial.idRadar = this.newApoioSocialForm.get('idRadar')?.value ?? '';
        this.newApoioSocial.entrevistaRadar = this.newApoioSocialForm.get('entrevistaRadar')?.value ?? '';


        // QUADRO STA
        this.newApoioSocial.numeroProcessoSta = this.newApoioSocialForm.get('numeroProcessoSta')?.value ?? '';
        this.newApoioSocial.necessitaSta = this.newApoioSocialForm.get('necessitaSta')?.value ?? '';
        this.newApoioSocial.reuneRequisitosNecessitaSta = this.newApoioSocialForm.get('reuneRequisitosNecessitaSta')?.value ?? '';
        this.newApoioSocial.motivoNaoReunirRequisitosSta = this.newApoioSocialForm.get('motivoNaoReunirRequisitosSta')?.value ?? '';

        // PLANO SAÚDE 65+
        this.newApoioSocial.numeroPlano = this.newApoioSocialForm.get('numeroPlano')?.value ?? '';
        this.newApoioSocial.jaEutentePlano = this.newApoioSocialForm.get('jaEutentePlano')?.value ?? '';
        this.newApoioSocial.foiRealizadaInscricaoPlano = this.newApoioSocialForm.get('foiRealizadaInscricaoPlano')?.value ?? '';


        // Sinalização
        this.newApoioSocial.foiFeitaSinalizacao = this.newApoioSocialForm.get('foiFeitaSinalizacao')?.value ?? '';
        this.newApoioSocial.comoFoiFeitaSinalizacao = this.newApoioSocialForm.get('comoFoiFeitaSinalizacao')?.value ?? '';

        // ** Adicionando as atividades criadas via radar ** //
        const atividadesCriadasSinalizacaoViaRadar = this.formAtividadesCriadasSinalizacaoViaRadar.value;  // Coleta os valores do FormArray
        this.newApoioSocial.atividadesCriadaSinalizacaoViaRadarLista = atividadesCriadasSinalizacaoViaRadar;  // Adiciona no objeto


        // ** Adicionando as informacoes da instituição via presencial ** //
        const informacoesInstituicaoSinalizacaoPresencial = this.formInformacoesInstituicaoSinalizacaoPresencial.value;  // Coleta os valores do FormArray
        this.newApoioSocial.informacaoInstituicaoSinalizacaoViaPresencialLista = informacoesInstituicaoSinalizacaoPresencial;  // Adiciona no objeto

        // ** Atividades Complementares **//
        const atividadeComplementarMarcado = this.newApoioSocialForm.get('atividadeComplementar')?.value;
        const atividadesSelecionadas = this.newApoioSocialForm.get('atividadesComplementaresIds')?.value ?? [];

        this.newApoioSocial.atividadeComplementar = atividadeComplementarMarcado;
        this.newApoioSocial.atividadesComplementaresIds = atividadeComplementarMarcado ? atividadesSelecionadas : []; // envia lista vazia se não estiver marcado


        // Descrição de trabalhos
        this.newApoioSocial.descricaoTrabalhos = this.newApoioSocialForm.get('descricaoTrabalhos')?.value ?? '';
    }


    // Getter para facilitar o acesso ao FormArray das atividades criadas
    get formAtividadesCriadasSinalizacaoViaRadar(): FormArray
    {
        return this.comoFoiFeitaSinalizacaoViaRadarForm.get('atividadesCriadasSinalizacaoViaRadar') as FormArray;
    }

     // Getter para facilitar o acesso ao FormArray das informações da instituição
     get formInformacoesInstituicaoSinalizacaoPresencial(): FormArray
     {
         return this.comoFoiFeitaSinalizacaoViaPresencialForm.get('informacaoInstituicaoSinalizacaoViaPresencial') as FormArray;
     }

    // Adicionar nova atividade
    adicionarAtividade()
    {
        const atividades = this.formAtividadesCriadasSinalizacaoViaRadar;

         // Se já existe alguma atividade, validar a última
        if (atividades.length > 0)
        {
            const ultimaAtividade = atividades.at(atividades.length - 1) as FormGroup;

            if (ultimaAtividade.invalid)
            {
                ultimaAtividade.markAllAsTouched(); // Para mostrar erros no template, se quiser
                return; // Impede adicionar nova se a última não está válida
            }
        }

        // Se chegou aqui, pode adicionar nova atividade
        const novaAtividadeForm  = this.fb.group(
        {
            tipoAtividadeCriada: ['', Validators.required],
            entidade: ['', Validators.required],
            grupoDeNaturezaOrigem: 'APOIO_SOCIAL'
        });
        atividades.push(novaAtividadeForm);
    }

    adicionarInformacaoInstituicao()
    {
        const informacaoInstituicao = this.formInformacoesInstituicaoSinalizacaoPresencial;

         // Se já existe alguma informacao da Instituicao, validar a última
        if (informacaoInstituicao.length > 0)
        {
            const ultimaInformacaoInstituicao= informacaoInstituicao.at(informacaoInstituicao.length - 1) as FormGroup;

            if (informacaoInstituicao.invalid)
            {
                informacaoInstituicao.markAllAsTouched(); // Para mostrar erros no template, se quiser
                return; // Impede adicionar nova se a última não está válida
            }
        }

        // Se chegou aqui, pode adicionar nova atividade
        const novaInformacaoInstituicaoForm  = this.fb.group(
        {
            nomeInstituicao: ['', Validators.required],
            nomeResponsavel: ['', Validators.required],
            grupoDeNaturezaOrigem: 'APOIO_SOCIAL'
        });

        informacaoInstituicao.push(novaInformacaoInstituicaoForm);
    }

    ultimaAtividadeEhValida(): boolean
    {
        const atividades = this.formAtividadesCriadasSinalizacaoViaRadar;
        if (atividades.length === 0)
        {
            return true; // Pode adicionar a primeira
        }

        const ultima = atividades.at(atividades.length - 1) as FormGroup;
        return ultima.valid;
    }

    ultimaInformacaoInstituicaoEhValida(): boolean
    {
        const informacaoInstituicao = this.formInformacoesInstituicaoSinalizacaoPresencial;
        if (informacaoInstituicao.length === 0)
        {
            return true; // Pode adicionar a primeira
        }

        const ultima = informacaoInstituicao.at(informacaoInstituicao.length - 1) as FormGroup;
        return ultima.valid;
    }

    // Remover atividade pelo índice
    removerAtividade(index: number)
    {
        this.formAtividadesCriadasSinalizacaoViaRadar.removeAt(index);
    }

     // Remover informacao instituicao pelo índice
     removerInformacaoInstituicao(index: number)
     {
         this.formInformacoesInstituicaoSinalizacaoPresencial.removeAt(index);
     }

    resetFormulario()
    {
        this.newApoioSocial = {

            nomeCompleto: '',
            genero: '',
            idadeMomentoIntervencao: '',
            dataNascimento: '',
            moradaId: null,
            tipoNaturezaOcorrenciaId: 0,
            numeroPolicia: '',
            fracao: '',
            telefone: '',
            noSeguimentoDaOcorrenciaNumero: '',
            kitEmergenciaSocial: false,
            quantidadeKitEmergenciaSocial: '',
            monitorizacao: false,
            insalubridadeHabitacional: false,

            // PROJETO RADAR
            idRadar: '',
            entrevistaRadar: false,

            // QUADRO STA
            numeroProcessoSta: '',
            necessitaSta: false,
            reuneRequisitosNecessitaSta: false,
            motivoNaoReunirRequisitosSta: '',

            // PLANO SAUDE LISBOA 65 MAIS
            numeroPlano: '',
            jaEutentePlano: false,
            foiRealizadaInscricaoPlano: false,

            // SINALIZACAO
            foiFeitaSinalizacao: false,
            comoFoiFeitaSinalizacao: '',
            atividadesCriadaSinalizacaoViaRadarLista: [] = [],
            informacaoInstituicaoSinalizacaoViaPresencialLista: [] = [],

            // ATIVIDADES COMPLEMENTARES
            atividadeComplementar: false,
            atividadesComplementaresIds: [] = [],

            descricaoTrabalhos: '',

        };

        this.newApoioSocialForm.reset(this.newApoioSocial);

        this.atualizarInformacaoQuadroPlanoSaude();
    }
}
