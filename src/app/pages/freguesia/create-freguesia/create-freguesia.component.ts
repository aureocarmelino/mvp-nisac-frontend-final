import { Component, OnInit } from '@angular/core';

import { BreadcrumbComponent } from '../../../components/breadcrumb/breadcrumb.component';
import { SpinnerComponent } from '../../../components/loader/spinner/spinner.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { InputTextModule } from 'primeng/inputtext';
import { FluidModule } from 'primeng/fluid';
import { ButtonModule } from 'primeng/button';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { FreguesiaService } from '../../../api/services/freguesia.service';
import { GenericCreateService } from '../../../api/services/generic-create.service';
import { CreateFreguesiaDto } from '../../../api/models/dto/CreateFreguesiaDto';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-create-freguesia',
  imports: [SpinnerComponent, BreadcrumbComponent, ReactiveFormsModule, InputTextModule, FluidModule,  ButtonModule,
            ToastrModule ],
  templateUrl: './create-freguesia.component.html',
  styleUrl: './create-freguesia.component.scss'
})
export class CreateFreguesiaComponent implements OnInit
{

  items: MenuItem[] | undefined;
  newFreguesia: CreateFreguesiaDto = new CreateFreguesiaDto();


  newFreguesiaForm = new FormGroup({
    description: new FormControl('', Validators.required),
  });


  constructor(public freguesiaService : FreguesiaService,  private toastr: ToastrService, private spinner: NgxSpinnerService,
    private genericCreateService : GenericCreateService
  ) { }



  ngOnInit(): void
  {
    this.items =
    [
      { label: "Dashboard", routerLink: '/'},
      { label: 'Listagem de Freguesia', routerLink: '/freguesia/listagem'},
      { label: 'Registo de Freguesia', id: "current" }
    ];
  }


  add(event: Event): void
  {
    event.preventDefault();

    this.setCreateFreguesoaDto();

    if(this.newFreguesiaForm.valid)
    {
      this.genericCreateService.executeWithHandling(
        this.freguesiaService.create(this.newFreguesia),'Freguesia criada com sucesso'
      ).subscribe(
      {
        next: () => this.resetFormulario(),
        error: () => this.toastr.error('Erro ao criar freguesia')
      });
    }
    else
    {
      this.spinner.hide();
      this.genericCreateService.messageErrorInvalidForm("Verifique se todos os campos estão preenchidos correctamente")
    }
  }


  setCreateFreguesoaDto()
  {
    this.newFreguesia.description = this.newFreguesiaForm.get('description')?.value ?? '';
  }

  resetFormulario()
  {
    this.newFreguesia = {
      description: ''
    };

    this.newFreguesiaForm.reset(this.newFreguesia);
  }
}
