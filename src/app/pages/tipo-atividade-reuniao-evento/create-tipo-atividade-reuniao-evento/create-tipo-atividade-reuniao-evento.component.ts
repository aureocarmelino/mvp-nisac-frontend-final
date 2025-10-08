import { Component, OnInit } from '@angular/core';
import { CreateTipoAtividadeDto } from '../../../api/models/dto/CreateTipoAtividadeDto';
import { MenuItem } from 'primeng/api';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TipoAtividadeReuniaoEventoService } from '../../../api/services/tipo-atividade-reuniao-evento.service';
import { GenericCreateService } from '../../../api/services/generic-create.service';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { SpinnerComponent } from '../../../components/loader/spinner/spinner.component';
import { BreadcrumbComponent } from '../../../components/breadcrumb/breadcrumb.component';
import { InputTextModule } from 'primeng/inputtext';
import { FluidModule } from 'primeng/fluid';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-create-tipo-atividade-reuniao-evento',
 imports: [SpinnerComponent, BreadcrumbComponent, ReactiveFormsModule, InputTextModule, FluidModule,  ButtonModule,
            ToastrModule ],
  templateUrl: './create-tipo-atividade-reuniao-evento.component.html',
  styleUrl: './create-tipo-atividade-reuniao-evento.component.scss'
})
export class CreateTipoAtividadeReuniaoEventoComponent implements OnInit
{

  items: MenuItem[] | undefined;
  newTipoAtividade: CreateTipoAtividadeDto = new CreateTipoAtividadeDto();


  newTipoAtividadeForm = new FormGroup({
    description: new FormControl('', Validators.required),
  });


  constructor(public tipoAtividadeReuniaoEventoService : TipoAtividadeReuniaoEventoService,  private toastr: ToastrService,
    private spinner: NgxSpinnerService, private genericCreateService : GenericCreateService
  ) { }



  ngOnInit(): void
  {
    this.items =
    [
      { label: "Dashboard", routerLink: '/'},
      { label: 'Listagem de Tipo de Atividade, Reunião e Evento', routerLink: '/tipo-atividade-reuniao-evento/listagem'},
      { label: 'Registo de Tipo de Atividade, Reunião e Evento', id: "current" }
    ];
  }


  add(event: Event): void
  {
    event.preventDefault();

    this.setCreateTipoAtividadeDto();

    if(this.newTipoAtividadeForm.valid)
    {
      this.genericCreateService.executeWithHandling(
        this.tipoAtividadeReuniaoEventoService.create(this.newTipoAtividade),'Tipo de Atividade, Reunião e Evento criado com sucesso'
      ).subscribe(
      {
        next: () => this.resetFormulario(),
        error: () => this.toastr.error('Erro ao criar tipo de atividade, reunião e evento')
      });
    }
    else
    {
      this.spinner.hide();
      this.genericCreateService.messageErrorInvalidForm("Verifique se todos os campos estão preenchidos correctamente")
    }
  }


  setCreateTipoAtividadeDto()
  {
    this.newTipoAtividade.description = this.newTipoAtividadeForm.get('description')?.value ?? '';
  }

  resetFormulario()
  {
    this.newTipoAtividade = {
      description: ''
    };

    this.newTipoAtividadeForm.reset(this.newTipoAtividade);
  }
}

