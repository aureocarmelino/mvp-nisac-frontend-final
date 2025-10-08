import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CreateUserNisacDto } from '../../../api/models/dto/CreateUserNisacDto';
import { UserNisacUpdatePassworDto } from '../../../api/models/dto/UserNisacUpdatePassworDto';
import { AuthService } from '../../../api/services/auth.service';
import { UtilizadorService } from '../../../api/services/utilizador.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { GenericCreateService } from '../../../api/services/generic-create.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputSwitchModule } from 'primeng/inputswitch';
import { SpinnerComponent } from '../../../components/loader/spinner/spinner.component';

@Component({
  selector: 'app-personal-page',
  imports: [CommonModule, FormsModule, DialogModule,
    DropdownModule, ReactiveFormsModule, ButtonModule, InputTextModule, InputSwitchModule,
  ],
  templateUrl: './personal-page.component.html',
  styleUrl: './personal-page.component.scss'
})
export class PersonalPageComponent implements OnInit
{
    //frontEndConstant = FRONT_END_CONSTANT;
    editarPalavraPassaCheck: boolean = false;   // Para controlar a exibição do formulário para editar a palavra passe
    visibleDialog: boolean = false;
    perfilUtilizadorItens: string[] = ['ADMIN', 'DEFAULT'];
    newUserNisac: CreateUserNisacDto = new CreateUserNisacDto();
    userNisacUpdatePassworDto: UserNisacUpdatePassworDto = new UserNisacUpdatePassworDto();
    user: any;

  newUserForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    username: new FormControl('', Validators.required),
    authority: new FormControl('', Validators.required)
  });

  // Formulário de alteração de senha
  passwordForm = new FormGroup({
    currentPassword: new FormControl('', Validators.required),
    newPassword: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('', Validators.required)
  });

  constructor(public auth : AuthService, public utilizadorService : UtilizadorService,
    private toastr: ToastrService, private spinner: NgxSpinnerService,
    private genericCreateService : GenericCreateService, private router : Router)
    {

    }

    ngOnInit(): void
    {
        this.user = this.auth.jwtPayload.logged;
        console.log(this.user.authority)
    }

  showDialog()
  {
    this.loadProfileData()
    this.visibleDialog = true;
  }

  loadProfileData()
  {
    this.newUserForm.patchValue({
      name: this.user.name,
      username: this.user.username,
      email: this.user.email,
      authority: this.user.authority
    });

  }


  updateUser(event: Event): void
  {
    event.preventDefault();
    this.spinner.show();
    this.setUpdateUserNisacDto();

    if(this.newUserForm.valid)
    {
      this.genericCreateService.executeWithHandling(
        this.utilizadorService.update(this.newUserNisac, this.user.id),'Faça o login novamente. Utilizador actualizado com sucesso'

      ).subscribe(
      {
        next: async () =>
        {

          // Chama o logout e aguarda o término
          await this.auth.logout();

          // Após o logout, redireciona para a página de login
          this.router.navigate(['/login']);
          this.spinner.hide();
        },
        error: () =>
        {
          this.spinner.hide();
          this.toastr.error('Erro ao actualizar utilizador')
        }
      });
    }
    else
    {
      this.spinner.hide();
      this.genericCreateService.messageErrorInvalidForm("Verifique se todos os campos estão preenchidos correctamente");
    }
  }

  updatePassword(event: Event): void
  {
      event.preventDefault();

      this.spinner.show();

      this.setUpdatePassword()

      if(this.passwordForm.valid)
      {
        this.genericCreateService.executeWithHandling(
          this.utilizadorService.updatePassowrd(this.userNisacUpdatePassworDto),'Password actualizada com sucesso'
        ).subscribe(
        {
          next: async () =>
          {
              // Chama o logout e aguarda o término
                await this.auth.logout();

                // Após o logout, redireciona para a página de login
                this.router.navigate(['/login']);
                this.spinner.hide();
          },
          error: () => {this.spinner.hide(); this.toastr.error('Erro ao actualizar password')}
        });
      }
      else
      {
        this.spinner.hide();
        this.genericCreateService.messageErrorInvalidForm("Verifique se todos os campos estão preenchidos correctamente");
      }
  }

  setUpdateUserNisacDto()
  {
    this.newUserNisac.name = this.newUserForm.get('name')?.value ?? '';
    this.newUserNisac.email = this.newUserForm.get('email')?.value ?? '';
    this.newUserNisac.username = this.newUserForm.get('username')?.value ?? '';
    this.newUserNisac.authority = this.newUserForm.get('authority')?.value ?? '';
  }

  setUpdatePassword()
  {
    this.userNisacUpdatePassworDto.currentPassword = this.passwordForm.get('currentPassword')?.value ?? '';
    this.userNisacUpdatePassworDto.newPassword = this.passwordForm.get('newPassword')?.value ?? '';
    this.userNisacUpdatePassworDto.confirmPassword = this.passwordForm.get('confirmPassword')?.value ?? '';
  }


  resetFormulario()
  {
    this.newUserNisac = {
      name: '',
      username: '',
      email: '',
      authority: ''
    };
    this.newUserForm.reset(this.newUserNisac);
  }

  resetFormularioPassword()
  {
    this.userNisacUpdatePassworDto = {
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    };
    this.passwordForm.reset(this.userNisacUpdatePassworDto);
  }

  onDialogClose(): void
  {
    this.visibleDialog = false;
    this.editarPalavraPassaCheck = false;
    this.newUserForm.reset();
    this.passwordForm.reset();
  }

  resetEditarPalavaraPasse()
  {
    if (this.editarPalavraPassaCheck)
    {
      this.passwordForm.reset(); // Limpa os campos do formulário de senha
    }
  }

}
