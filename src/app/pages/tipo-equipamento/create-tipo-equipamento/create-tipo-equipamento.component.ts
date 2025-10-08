import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { CreateTipoEquipamentoDto } from '../../../api/models/dto/CreateTipoEquipamentoDto';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TipoEquipamentoService } from '../../../api/services/tipo-equipamento.service';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { GenericCreateService } from '../../../api/services/generic-create.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { SpinnerComponent } from '../../../components/loader/spinner/spinner.component';
import { BreadcrumbComponent } from '../../../components/breadcrumb/breadcrumb.component';
import { InputTextModule } from 'primeng/inputtext';
import { FluidModule } from 'primeng/fluid';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-create-tipo-equipamento',
  imports: [SpinnerComponent, BreadcrumbComponent, ReactiveFormsModule, InputTextModule, FluidModule,  ButtonModule,
            ToastrModule ],
  templateUrl: './create-tipo-equipamento.component.html',
  styleUrl: './create-tipo-equipamento.component.scss'
})
export class CreateTipoEquipamentoComponent implements OnInit
{

  items: MenuItem[] | undefined;
  newTipoEquipamento: CreateTipoEquipamentoDto = new CreateTipoEquipamentoDto();


  newTipoEquipamentoForm = new FormGroup({
    description: new FormControl('', Validators.required),
  });


  constructor(public tipoEquipamentoService : TipoEquipamentoService,  private toastr: ToastrService,
    private spinner: NgxSpinnerService, private genericCreateService : GenericCreateService
  ) { }



  ngOnInit(): void
  {
    this.items =
    [
      { label: "Dashboard", routerLink: '/'},
      { label: 'Listagem de Tipo de Equipamento', routerLink: '/tipo-equipamento/listagem'},
      { label: 'Registo de Tipo de Equipamento', id: "current" }
    ];
  }


  add(event: Event): void
  {
    event.preventDefault();

    this.setCreateTipoEquipamentoDto();

    if(this.newTipoEquipamentoForm.valid)
    {
      this.genericCreateService.executeWithHandling(
        this.tipoEquipamentoService.create(this.newTipoEquipamento),'Tipo de Equipamento criado com sucesso'
      ).subscribe(
      {
        next: () => this.resetFormulario(),
        error: () => this.toastr.error('Erro ao criar tipo de equipamento')
      });
    }
    else
    {
      this.spinner.hide();
      this.genericCreateService.messageErrorInvalidForm("Verifique se todos os campos estão preenchidos correctamente")
    }
  }


  setCreateTipoEquipamentoDto()
  {
    this.newTipoEquipamento.description = this.newTipoEquipamentoForm.get('description')?.value ?? '';
  }

  resetFormulario()
  {
    this.newTipoEquipamento = {
      description: ''
    };

    this.newTipoEquipamentoForm.reset(this.newTipoEquipamento);
  }
}

