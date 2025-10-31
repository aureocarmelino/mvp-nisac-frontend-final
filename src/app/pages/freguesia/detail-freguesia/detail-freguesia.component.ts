import { Component, OnInit } from '@angular/core';
import { Freguesia } from '../../../api/models/entity/Freguesia';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../../api/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { FreguesiaService } from '../../../api/services/freguesia.service';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CreateFreguesiaDto } from '../../../api/models/dto/CreateFreguesiaDto';
import { GenericCreateService } from '../../../api/services/generic-create.service';

@Component({
  selector: 'app-detail-freguesia',
  imports: [CommonModule, ButtonModule, ReactiveFormsModule, DialogModule, FormsModule, InputTextModule, AutoCompleteModule],
  templateUrl: './detail-freguesia.component.html',
  styleUrl: './detail-freguesia.component.scss'
})
export class DetailFreguesiaComponent implements OnInit
{
    freguesia: Freguesia | undefined;
    createFreguesiaDto = new CreateFreguesiaDto();
    visibleDialogDesativar: boolean = false;
    visibleDialogEditar: boolean = false;

    newForm = new FormGroup({
        description: new FormControl<string | null>('', Validators.required)
    });

  constructor(public auth : AuthService, private router: Router,
     private genericCreateService: GenericCreateService,
    private activatedRoute: ActivatedRoute,public freguesiaService : FreguesiaService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService) { }


  ngOnInit(): void
  {
    this.spinner.show();

    const id = String(this.activatedRoute.snapshot.paramMap.get('id'));

    this.freguesiaService.findById(id).subscribe((response) =>
    {
      this.spinner.hide();
      this.freguesia = response;
    },
    (error) =>
    {
      this.spinner.hide();
      this.toastr.error("Erro ao obter a informação")
      this.router.navigate(['/freguesia/listagem']);
    }
    );
  }

  showDialogDesativar() {
        //this.showDialogDesativar()
        this.visibleDialogDesativar = true;
    }

    showDialogEditar() {

        // Preenche o formulário com os dados do objeto atual
        this.newForm.patchValue({
            description: this.freguesia?.description ?? ''
        });

        // Exibe o diálogo
        this.visibleDialogEditar = true;
    }

     onDialogCloseDesativar(): void {
        this.visibleDialogDesativar = false;
    }

    onDialogCloseEditar(): void {
        this.visibleDialogEditar = false;
        this.newForm.reset();
    }

     update(event: Event): void {
            event.preventDefault();

            // this.spinner.show();

            this.setUpdate()

            if (this.newForm.valid) {
                this.genericCreateService.executeWithHandling(
                    this.freguesiaService.update(this.freguesia?.id!, this.createFreguesiaDto!), 'Freguesia atualizada com sucesso'
                ).subscribe(
                    {
                        next: async (update: Freguesia) => {

                            this.freguesia = update; // Atualiza na hora
                            this.visibleDialogEditar = false;

                        },
                        error: () => { this.spinner.hide(); this.toastr.error('Erro ao atualizar') }
                    });
            }
            else {
                this.spinner.hide();
                this.genericCreateService.messageErrorInvalidForm("Verifique se todos os campos estão preenchidos correctamente");
            }
        }

        setUpdate() {
        this.createFreguesiaDto!.description = this.newForm.get('description')?.value ?? '';
    }

    changeStatusById(): void {
        this.genericCreateService.executeWithHandling(
            this.freguesiaService.changeStatus(this.freguesia?.id!, false), 'Freguesia removida com sucesso'
        ).subscribe(
            {
                next: () => this.goBack(),
                error: () => this.toastr.error('Erro ao remover')
            });
    }


  goBack()
  {
    this.router.navigate(['/freguesia/listagem']);  // Voltar para a página de lista
  }
}
