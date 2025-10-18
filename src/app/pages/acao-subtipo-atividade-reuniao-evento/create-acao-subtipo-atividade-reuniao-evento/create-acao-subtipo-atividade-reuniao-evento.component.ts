import { Component, OnInit } from '@angular/core';
import { TipoAtividadeReuniaoEvento } from '../../../api/models/entity/TipoAtividadeReuniaoEvento';
import { CreateAcaoSubtipoAtividadeReuniaoEventoDto } from '../../../api/models/dto/CreateAcaoSubtipoAtividadeReuniaoEventoDto';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MenuItem } from 'primeng/api';
import { TipoAtividadeReuniaoEventoService } from '../../../api/services/tipo-atividade-reuniao-evento.service';
import { AcaoSubtipoAtividadeReuniaoEventoService } from '../../../api/services/acao-subtipo-atividade-reuniao-evento.service';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { GenericCreateService } from '../../../api/services/generic-create.service';
import { SpinnerComponent } from '../../../components/loader/spinner/spinner.component';
import { BreadcrumbComponent } from '../../../components/breadcrumb/breadcrumb.component';
import { InputTextModule } from 'primeng/inputtext';
import { FluidModule } from 'primeng/fluid';
import { ButtonModule } from 'primeng/button';
import { AutoCompleteModule } from 'primeng/autocomplete';

@Component({
  selector: 'app-create-acao-subtipo-atividade-reuniao-evento',
  imports: [SpinnerComponent, BreadcrumbComponent, ReactiveFormsModule, InputTextModule, FluidModule,  ButtonModule,
              ToastrModule, AutoCompleteModule],
  templateUrl: './create-acao-subtipo-atividade-reuniao-evento.component.html',
  styleUrl: './create-acao-subtipo-atividade-reuniao-evento.component.scss'
})
export class CreateAcaoSubtipoAtividadeReuniaoEventoComponent implements OnInit
{
  valSwitch: boolean = false;
  tipoAtividadeReuniaoEventoItens: TipoAtividadeReuniaoEvento[] = [];
  newAcao: CreateAcaoSubtipoAtividadeReuniaoEventoDto = new CreateAcaoSubtipoAtividadeReuniaoEventoDto();
  newAcaoForm!: FormGroup;


  filteredTipoAtividadeReuniaoEventos: any[] = [];
  selectedTipoAtividadeReuniaoEvento!: TipoAtividadeReuniaoEvento;

  items: MenuItem[] | undefined;

  constructor(public acaoSubtipoAtividadeReuniaoEventoService : AcaoSubtipoAtividadeReuniaoEventoService,
    public tipoAtividadeReuniaoEventoService : TipoAtividadeReuniaoEventoService,
    private toastr: ToastrService, private spinner: NgxSpinnerService, private genericCreateService: GenericCreateService) { }


    ngOnInit(): void
    {
      this.items =
      [
        { label: "Dashboard", routerLink: '/'},
        { label: 'Listagem de Ação Subtipo Atividade, Reunião e Evento', routerLink: '/acao-subtipo-atividade-reuniao-evento/listagem'},
        { label: 'Registo de Ação Subtipo Atividade, Reunião e Evento', id: "current" }
      ];

      this.loadTipoAtividadeReuniaoEvento();

      this.newAcaoForm = new FormGroup(
      {
        tipoAtividadeReuniaoEvento: new FormControl('', Validators.required),
        description: new FormControl('', Validators.required,),
      });

    }


    filterTipoAtividadeReuniaoEvento(event: any)
    {
      const tipoAtividadeReuniaoEventoFiltrada: TipoAtividadeReuniaoEvento[] = [];
      const query = event.query;

      for (let i = 0; i < this.tipoAtividadeReuniaoEventoItens.length; i++)
      {
          const tipoAtividadeReuniaoEvento = this.tipoAtividadeReuniaoEventoItens[i];

          if (tipoAtividadeReuniaoEvento.description!.toLowerCase().indexOf(query.toLowerCase()) == 0)
          {
            tipoAtividadeReuniaoEventoFiltrada.push(tipoAtividadeReuniaoEvento);
          }
      }
      this.filteredTipoAtividadeReuniaoEventos = tipoAtividadeReuniaoEventoFiltrada;
    }




    loadTipoAtividadeReuniaoEvento()
    {
      this.tipoAtividadeReuniaoEventoService.findAllTipoAtividadeReuniaoEvento().subscribe((res) =>
      {
        this.tipoAtividadeReuniaoEventoItens = res;
      }
     );
    }


    add(event: Event): void
    {
      event.preventDefault();

      this.setCreateAcaoSubtipo(); // Configuração específica para o formulário atual

      if(this.newAcaoForm.valid)
      {
        this.genericCreateService.executeWithHandling(
          this.acaoSubtipoAtividadeReuniaoEventoService.create(this.newAcao),'Ação criada com sucesso'
        ).subscribe(
        {
          next: () => this.resetFormulario(),
          error: () => this.toastr.error('Erro ao criar ação') // Erro tratado pelo BaseService
        });
      }
      else
      {
        this.spinner.hide();
        this.genericCreateService.messageErrorInvalidForm("Verifique se todos os campos estão preenchidos correctamente")
      }
    }

    setCreateAcaoSubtipo()
    {
      this.newAcao.tipoAtividadeReuniaoEvento = this.newAcaoForm.get('tipoAtividadeReuniaoEvento')?.value.id ?? '';
      this.newAcao.description = this.newAcaoForm.get('description')?.value ?? '';
    }

    resetFormulario()
    {
      this.newAcao = {
        tipoAtividadeReuniaoEvento: undefined,
        description: ''
      };

      this.newAcaoForm.reset(this.newAcao);
    }
}
