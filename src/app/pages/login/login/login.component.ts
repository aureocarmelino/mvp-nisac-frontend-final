import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../api/services/auth.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { MessageService } from 'primeng/api';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { SpinnerComponent } from '../../../components/loader/spinner/spinner.component';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-login',
  imports: [SpinnerComponent, ReactiveFormsModule, InputTextModule,  ButtonModule,
                ToastrModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  providers: [MessageService, AuthService]
})
export class LoginComponent
{
  loginForm = new FormGroup({

    email: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.minLength(5)])

  })

  constructor(private messageService: MessageService, public authService: AuthService,
    private router: Router, private toastr: ToastrService, public spinner: NgxSpinnerService) {
      //
    //authService.clearAccessToken()
  }

  loginUser(event: Event)
  {

    // Previne o comportamento padrão de refresh da página
    event.preventDefault();

    this.spinner.show();

    if (this.loginForm.valid)
    {
      this.authService.login(this.loginForm.value.email as string, this.loginForm.value.password as string)
      .subscribe({
        next: () =>
        {
          this.spinner.hide();
          this.toastr.success('Utilizador autenticado', 'Sucesso', {
            progressBar: true,
            timeOut: 5000,
          });

          this.router.navigateByUrl('/').then(() => {
             window.location.reload();
          })
        },
        error: (err: any) =>
        {
          this.spinner.hide();
          this.toastr.error(err, "ERRO",
          {
            progressBar: true,
          });
        },
        //complete:
      });

    }
    else
    {

      this.spinner.hide();
      this.toastr.error("Verifique se a palavra-passe possui mais de 4 dígitos", "ERRO",
      {
        progressBar: true,
      });

      this.toastr.error("Formulário inválido", "ERRO",
      {
        progressBar: true,
      });
    }
  }
}
