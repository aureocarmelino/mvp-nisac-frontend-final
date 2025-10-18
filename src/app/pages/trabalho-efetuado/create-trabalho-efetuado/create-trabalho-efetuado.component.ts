import { Component } from '@angular/core';
import { CreateTrabalhoEfetuadoDto } from '../../../api/models/dto/CreateTrabalhoEfetuadoDto';
import { MenuItem } from 'primeng/api';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TrabalhoEfetuadoService } from '../../../api/services/trabalho-efetuado.service';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { GenericCreateService } from '../../../api/services/generic-create.service';
import { SpinnerComponent } from '../../../components/loader/spinner/spinner.component';
import { BreadcrumbComponent } from '../../../components/breadcrumb/breadcrumb.component';
import { InputTextModule } from 'primeng/inputtext';
import { FluidModule } from 'primeng/fluid';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-create-trabalho-efetuado',
  imports: [SpinnerComponent, BreadcrumbComponent, ReactiveFormsModule, InputTextModule, FluidModule,  ButtonModule,
              ToastrModule ],
  templateUrl: './create-trabalho-efetuado.component.html',
  styleUrl: './create-trabalho-efetuado.component.scss'
})
export class CreateTrabalhoEfetuadoComponent
{

    newTrabalhoEfetuado: CreateTrabalhoEfetuadoDto = new CreateTrabalhoEfetuadoDto();
    items: MenuItem[] | undefined;

    newTrabalhoEfetuadoForm = new FormGroup({
      description: new FormControl('', Validators.required),
    });


    constructor(public trabalhoEfetuadoService : TrabalhoEfetuadoService,
      private toastr: ToastrService, private spinner: NgxSpinnerService, private genericCreateService : GenericCreateService) { }


    ngOnInit(): void
    {
      this.items =
      [
        { label: "Dashboard", routerLink: '/'},
        { label: 'Listagem de Trabalho Efetuado', routerLink: '/trabalho-efectuado/listagem'},
        { label: 'Registo de Trabalho Efetuado', id: "current" }
      ];
    }

    add(event: Event): void
    {
      event.preventDefault();

      this.setCreateTrabalhoEfectuadoDto();

      if(this.newTrabalhoEfetuadoForm.valid)
      {
        this.genericCreateService.executeWithHandling(
          this.trabalhoEfetuadoService.create(this.newTrabalhoEfetuado),'Trabalho efectuado criado com sucesso'
        ).subscribe(
        {
          next: () => this.resetFormulario(),
          error: () => this.toastr.error('Erro ao criar trabalho efetuado')
        });
      }
      else
      {
        this.spinner.hide();
        this.genericCreateService.messageErrorInvalidForm("Verifique se todos os campos estão preenchidos correctamente")
      }
    }


    setCreateTrabalhoEfectuadoDto()
    {
      this.newTrabalhoEfetuado.description = this.newTrabalhoEfetuadoForm.get('description')?.value ?? '';
    }

    resetFormulario()
    {
      this.newTrabalhoEfetuado = {
        description: ''
      };

      this.newTrabalhoEfetuadoForm.reset(this.newTrabalhoEfetuado);
    }

}
