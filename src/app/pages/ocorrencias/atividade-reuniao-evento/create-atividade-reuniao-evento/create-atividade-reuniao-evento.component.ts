import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { CreateAtividadeReuniaoEventoDto } from '../../../../api/models/dto/CreateAtividadeReuniaoEventoDto';
import { TipoNaturezaOcorrencia } from '../../../../api/models/entity/TipoNaturezaOcorrencia';
import { TipoAtividadeReuniaoEvento } from '../../../../api/models/entity/TipoAtividadeReuniaoEvento';
import { AcaoSubTipoAtividadeReuniaoEvento } from '../../../../api/models/entity/AcaoSubTipoAtividadeReuniaoEvento';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AtividadeReuniaoEventoService } from '../../../../api/services/atividade-reuniao-evento.service';
import { TipoNaturezaOcorrenciaService } from '../../../../api/services/tipo-natureza-ocorrencia.service';
import { TipoAtividadeReuniaoEventoService } from '../../../../api/services/tipo-atividade-reuniao-evento.service';
import { AcaoSubtipoAtividadeReuniaoEventoService } from '../../../../api/services/acao-subtipo-atividade-reuniao-evento.service';
import { GenericCreateService } from '../../../../api/services/generic-create.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from '../../../../components/breadcrumb/breadcrumb.component';
import { InputTextModule } from 'primeng/inputtext';
import { FluidModule } from 'primeng/fluid';
import { ButtonModule } from 'primeng/button';
import { TextareaModule } from 'primeng/textarea';
import { SelectModule } from 'primeng/select';
import { MessageModule } from 'primeng/message';
import { MultiSelectModule } from 'primeng/multiselect';
import { RequiredLabelComponent } from '../../../../components/required-label/required-label.component';
import { SpinnerComponent } from '../../../../components/loader/spinner/spinner.component';
import { DialogModule } from 'primeng/dialog';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { TabsModule } from 'primeng/tabs';
import { DividerModule } from 'primeng/divider';
import { AutoCompleteModule } from 'primeng/autocomplete';

@Component({
  selector: 'app-create-atividade-reuniao-evento',
  imports: [CommonModule, BreadcrumbComponent, InputTextModule, FluidModule,
          ButtonModule, SelectModule, FormsModule, TextareaModule, TabsModule, ToggleSwitchModule, DividerModule,
          MessageModule, MultiSelectModule, SpinnerComponent, DialogModule, CommonModule, InputTextModule, ButtonModule,
          FormsModule, ReactiveFormsModule, AutoCompleteModule],
  templateUrl: './create-atividade-reuniao-evento.component.html',
  styleUrl: './create-atividade-reuniao-evento.component.scss'
})
export class CreateAtividadeReuniaoEventoComponent implements OnInit
{

  itemsMenu: MenuItem[] | undefined;
  newAtividadesReunioesEventos: CreateAtividadeReuniaoEventoDto = new CreateAtividadeReuniaoEventoDto();
  tipoNaturezasItens: TipoNaturezaOcorrencia[] = [];

  tipoAtividadeReuniaoEventoItens: TipoAtividadeReuniaoEvento[] = [];

  acaoSubTipoAtividadeReuniaoEventoItens: AcaoSubTipoAtividadeReuniaoEvento[] = [];

  newAtividadeReuniaoEventoForm = new FormGroup({
    tipoNaturezaOcorrencia: new FormControl(''),
    acaoSubTipoAtividadeReuniaoEvento: new FormControl(''),
    exemplosOuReferencias: new FormControl(''),
    representantesNisac: new FormControl(''),
    representantesExternos: new FormControl(''),
    entidadePromotoraEvento: new FormControl(''),
    responsavelEntidadePromotoraEvento: new FormControl(''),
    local: new FormControl(''),
    ambitoOuObservacao: new FormControl(''),
    numeroActa: new FormControl(''),
    tipoAtividadeReuniaoEvento: new FormControl('')
  });


  constructor(public atividadeReuniaoEventoService : AtividadeReuniaoEventoService,
    public naturezaOcorrenciaService : TipoNaturezaOcorrenciaService,
    public tipoAtividadeReuniaoEventoService : TipoAtividadeReuniaoEventoService,
    public acaoSubTipoAtividadeReuniaoEventoService : AcaoSubtipoAtividadeReuniaoEventoService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService, private genericCreateService : GenericCreateService) { }

  ngOnInit(): void
  {
    this.itemsMenu =
    [
      { label: "Dashboard", routerLink: '/'},
      { label: 'Ocorrências', routerLink: '/ocorrencias' },
      { label: 'Atividades, Reuniões e Eventos', routerLink: '/ocorrencia/atividades-reunioes-eventos' },
      { label: 'Registo', id: "current" }
    ];

    this.loadTipoNaturezaNaturezaAtividadeReuniaoEvento();
    this.loadTipoAtividadeReuniaoEvento();
  }




  add(event: Event): void
  {
    event.preventDefault();

    this.setCreateSaidaAbtmDto(); // Configuração específica para o formulário atual

    if(this.newAtividadeReuniaoEventoForm.valid)
    {
        console.log(this.newAtividadesReunioesEventos);

      this.genericCreateService.executeWithHandling(
        this.atividadeReuniaoEventoService.create(this.newAtividadesReunioesEventos),'Atividade, Reunião e Evento criada com sucesso'
      ).subscribe(
      {
        next: () => this.resetFormulario(),
        error: () => this.toastr.error("Erro ao criar uma Atividade, Reunião e Evento !") // Erro tratado pelo BaseService
      });
    }
    else
    {
      this.spinner.hide();
      this.genericCreateService.messageErrorInvalidForm("Verifique se todos os campos estão preenchidos correctamente")
    }
  }

  setCreateSaidaAbtmDto()
  {
    this.newAtividadesReunioesEventos.tipoNaturezaOcorrencia = this.newAtividadeReuniaoEventoForm.get('tipoNaturezaOcorrencia')?.value ?? '';
    this.newAtividadesReunioesEventos.acaoSubTipoAtividadeReuniaoEvento = this.newAtividadeReuniaoEventoForm.get('acaoSubTipoAtividadeReuniaoEvento')?.value ?? '';
    this.newAtividadesReunioesEventos.exemplosOuReferencias = this.newAtividadeReuniaoEventoForm.get('exemplosOuReferencias')?.value ?? '';
    this.newAtividadesReunioesEventos.representantesNisac = this.newAtividadeReuniaoEventoForm.get('representantesNisac')?.value ?? '';
    this.newAtividadesReunioesEventos.representantesExternos = this.newAtividadeReuniaoEventoForm.get('representantesExternos')?.value ?? '';
    this.newAtividadesReunioesEventos.entidadePromotoraEvento = this.newAtividadeReuniaoEventoForm.get('entidadePromotoraEvento')?.value ?? '';
    this.newAtividadesReunioesEventos.responsavelEntidadePromotoraEvento = this.newAtividadeReuniaoEventoForm.get('responsavelEntidadePromotoraEvento')?.value ?? '';
    this.newAtividadesReunioesEventos.local = this.newAtividadeReuniaoEventoForm.get('local')?.value ?? '';
    this.newAtividadesReunioesEventos.ambitoOuObservacao = this.newAtividadeReuniaoEventoForm.get('ambitoOuObservacao')?.value ?? '';
    this.newAtividadesReunioesEventos.numeroActa = this.newAtividadeReuniaoEventoForm.get('numeroActa')?.value ?? '';
  }

  resetFormulario()
  {

    this.acaoSubTipoAtividadeReuniaoEventoItens = [] = []

    this.newAtividadesReunioesEventos = {
      tipoNaturezaOcorrencia: '',
      acaoSubTipoAtividadeReuniaoEvento: '',
      exemplosOuReferencias: '',
      representantesNisac: '',
      representantesExternos: '',
      entidadePromotoraEvento: '',
      responsavelEntidadePromotoraEvento: '',
      local: '',
      ambitoOuObservacao: '',
      numeroActa: ''
    };


    this.newAtividadeReuniaoEventoForm.reset(this.newAtividadesReunioesEventos);
  }

  loadTipoNaturezaNaturezaAtividadeReuniaoEvento()
  {
    this.naturezaOcorrenciaService.findByGrupoNaturezaId("18cb40c3-5a3c-431e-a5f0-9d38531617ba").subscribe((res) =>
    {
      this.tipoNaturezasItens = res;
    }
    );
  }

  loadTipoAtividadeReuniaoEvento()
  {
    this.tipoAtividadeReuniaoEventoService.findAllTipoAtividadeReuniaoEvento().subscribe((res) =>
    {
      this.tipoAtividadeReuniaoEventoItens = res;
    }
    );
  }

  loadAcaoSubTipoAtividadeReuniaoEvento()
  {
    let idTipoAtividadeReuniaoEvento = String(this.newAtividadeReuniaoEventoForm.get('tipoAtividadeReuniaoEvento')?.value);

    if (idTipoAtividadeReuniaoEvento)
    {
      this.acaoSubTipoAtividadeReuniaoEventoService.findAllByTipoAtividadeReuniaoEvento(idTipoAtividadeReuniaoEvento).subscribe((res) => {
        this.acaoSubTipoAtividadeReuniaoEventoItens = res;
      });
    }
  }

}

