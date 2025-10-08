import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../components/breadcrumb/breadcrumb.component';
import { SpinnerComponent } from '../../../components/loader/spinner/spinner.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MenuItem } from 'primeng/api';
import { UtilizadorService } from '../../../api/services/utilizador.service';
import { GenericCreateService } from '../../../api/services/generic-create.service';
import { CreateUserNisacDto } from '../../../api/models/dto/CreateUserNisacDto';
import { Select, SelectModule  } from 'primeng/select';
import { InputTextModule } from 'primeng/inputtext';
import { FluidModule } from 'primeng/fluid';
import { ButtonModule } from 'primeng/button';
import { ButtonGroupModule } from 'primeng/buttongroup';
import { ToastrModule, ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-create-utilizador',
  imports: [SpinnerComponent, BreadcrumbComponent, ReactiveFormsModule, Select, SelectModule, InputTextModule, FluidModule, ButtonGroupModule, ButtonModule,
    ToastrModule, 
  ],
  templateUrl: './create-utilizador.component.html',
  styleUrl: './create-utilizador.component.scss'
})
export class CreateUtilizadorComponent
{
    items: MenuItem[] | undefined;
    newUserNisac: CreateUserNisacDto = new CreateUserNisacDto();

    perfilUtilizadorItens =
    [
        { label: 'Administrador', value: 'ADMIN' },
        { label: 'Padrão', value: 'DEFAULT' }
    ];



    newUserForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      username: new FormControl('', Validators.required),
      authority: new FormControl('', Validators.required)
    });


    constructor(public utilizadorService : UtilizadorService,
        private toastr: ToastrService, private spinner: NgxSpinnerService, private genericCreateService : GenericCreateService) { }


    ngOnInit(): void
    {
      this.items =
      [
        { label: "Dashboard", routerLink: '/'},
        { label: 'Listagem de Utilizadores', routerLink: '/utilizador/listagem'},
        { label: 'Registo de Utilizador', id: "current" }
      ];

    }

    add(event: Event): void
    {
      event.preventDefault();

      this.setCreateUserNisacDto();

      if(this.newUserForm.valid)
      {
        this.genericCreateService.executeWithHandling(
          this.utilizadorService.create(this.newUserNisac),'Utilizador criado com sucesso'
        ).subscribe(
        {
          next: () => this.resetFormulario(),
          error: () => this.toastr.error('Erro ao criar um utilizador')
        });
      }
      else
      {
        this.spinner.hide();
        this.genericCreateService.messageErrorInvalidForm("Verifique se todos os campos estão preenchidos correctamente")
      }
    }




    setCreateUserNisacDto()
    {
        this.newUserNisac.name = this.newUserForm.get('name')?.value ?? '';
        this.newUserNisac.email = this.newUserForm.get('email')?.value ?? '';
        this.newUserNisac.username = this.newUserForm.get('username')?.value ?? '';
        this.newUserNisac.authority = this.newUserForm.get('authority')?.value ?? '';
    }


    resetFormulario()
    {
      this.newUserNisac =
      {
        name: '',
        username: '',
        email: '',
        authority: ''
      };
      this.newUserForm.reset(this.newUserNisac);
    }

}
