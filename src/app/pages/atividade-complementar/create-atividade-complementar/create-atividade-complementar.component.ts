import { Component, OnInit } from '@angular/core';
import { CreateAtividadeComplementarDto } from '../../../api/models/dto/CreateAtividadeComplementarDto';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MenuItem } from 'primeng/api';
import { AtividadeComplementarService } from '../../../api/services/atividade-complementar.service';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { GenericCreateService } from '../../../api/services/generic-create.service';
import { SpinnerComponent } from '../../../components/loader/spinner/spinner.component';
import { BreadcrumbComponent } from '../../../components/breadcrumb/breadcrumb.component';
import { InputTextModule } from 'primeng/inputtext';
import { FluidModule } from 'primeng/fluid';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-create-atividade-complementar',
  imports: [SpinnerComponent, BreadcrumbComponent, ReactiveFormsModule, InputTextModule, FluidModule,  ButtonModule,
             ToastrModule ],
  templateUrl: './create-atividade-complementar.component.html',
  styleUrl: './create-atividade-complementar.component.scss'
})
export class CreateAtividadeComplementarComponent implements OnInit
{

  items: MenuItem[] | undefined;
  newAtividadeComplementar: CreateAtividadeComplementarDto = new CreateAtividadeComplementarDto();


  newAtividadeComplementarForm = new FormGroup({
    description: new FormControl('', Validators.required),
  });


  constructor(public atividadeComplementarService : AtividadeComplementarService,  private toastr: ToastrService, private spinner: NgxSpinnerService,
    private genericCreateService : GenericCreateService) { }



  ngOnInit(): void
  {
    this.items =
    [
      { label: "Dashboard", routerLink: '/'},
      { label: 'Listagem de Atividade Complementar', routerLink: '/atividade-complementar/listagem'},
      { label: 'Registo de Atividade Complementar', id: "current" }
    ];
  }


  add(event: Event): void
  {
    event.preventDefault();

    this.setCreateAtividadeComplementarDto();

    if(this.newAtividadeComplementarForm.valid)
    {
      this.genericCreateService.executeWithHandling(
        this.atividadeComplementarService.create(this.newAtividadeComplementar),'Atividade Complementar criada com sucesso'
      ).subscribe(
      {
        next: () => this.resetFormulario(),
        error: () => this.toastr.error('Erro ao criar atividade complementar')
      });
    }
    else
    {
      this.spinner.hide();
      this.genericCreateService.messageErrorInvalidForm("Verifique se todos os campos estão preenchidos correctamente")
    }
  }


  setCreateAtividadeComplementarDto()
  {
    this.newAtividadeComplementar.description = this.newAtividadeComplementarForm.get('description')?.value ?? '';
  }

  resetFormulario()
  {
    this.newAtividadeComplementar = {
      description: ''
    };

    this.newAtividadeComplementarForm.reset(this.newAtividadeComplementar);
  }
}
