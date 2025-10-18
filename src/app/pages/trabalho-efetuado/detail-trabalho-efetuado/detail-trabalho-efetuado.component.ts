import { Component, OnInit } from '@angular/core';
import { TrabalhoEfetuado } from '../../../api/models/entity/TrabalhoEfetuado';
import { TrabalhoEfetuadoService } from '../../../api/services/trabalho-efetuado.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from '../../../api/services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { GenericCreateService } from '../../../api/services/generic-create.service';
import { CreateTrabalhoEfetuadoDto } from '../../../api/models/dto/CreateTrabalhoEfetuadoDto';
import { InputTextModule } from 'primeng/inputtext';

@Component({
    selector: 'app-detail-trabalho-efetuado',
    imports: [CommonModule, ButtonModule, ReactiveFormsModule, DialogModule, FormsModule, InputTextModule],
    templateUrl: './detail-trabalho-efetuado.component.html',
    styleUrl: './detail-trabalho-efetuado.component.scss'
})
export class DetailTrabalhoEfetuadoComponent implements OnInit {
    trabalhoEfectuado: TrabalhoEfetuado | undefined;
    trabalhoEfectuadoDto = new CreateTrabalhoEfetuadoDto();
    visibleDialogDesativar: boolean = false;
    visibleDialogEditar: boolean = false;

    newTrabalhoEfectuadoForm = new FormGroup({
        description: new FormControl('', Validators.required)
    });

    constructor(public auth: AuthService, private router: Router,
        private genericCreateService: GenericCreateService,
        private activatedRoute: ActivatedRoute, public trabalhoEfetuadoService: TrabalhoEfetuadoService,
        private toastr: ToastrService, private spinner: NgxSpinnerService) { }


    ngOnInit(): void {
        this.spinner.show();

        const id = String(this.activatedRoute.snapshot.paramMap.get('id'));

        this.trabalhoEfetuadoService.findById(id).subscribe((response) => {
            this.spinner.hide();
            this.trabalhoEfectuado = response;
        },
            (error) => {
                this.spinner.hide();
                this.toastr.error("Erro ao obter a informação")
                this.router.navigate(['/trabalho-efectuado/listagem']);
            }
        );
    }

    updateTrabalhoEfectuado(event: Event): void {
        event.preventDefault();

       // this.spinner.show();

        this.setUpdate()

        if (this.newTrabalhoEfectuadoForm.valid) {
            this.genericCreateService.executeWithHandling(
                this.trabalhoEfetuadoService.update(this.trabalhoEfectuado?.id!, this.trabalhoEfectuadoDto!), 'Trabalho Efectuado atualizado com sucesso'
            ).subscribe(
                {
                    next: async (updatedTrabalho: TrabalhoEfetuado) => {

                        this.trabalhoEfectuado = updatedTrabalho; // Atualiza na hora
                        this.visibleDialogEditar = false;

                    },
                    error: () => { this.spinner.hide(); this.toastr.error('Erro ao atualizar trabalho efectuado ') }
                });
        }
        else {
            this.spinner.hide();
            this.genericCreateService.messageErrorInvalidForm("Verifique se todos os campos estão preenchidos correctamente");
        }
    }


    showDialogDesativar() {
        //this.showDialogDesativar()
        this.visibleDialogDesativar = true;
    }

    showDialogEditar() {

        this.visibleDialogEditar = true;
        this.newTrabalhoEfectuadoForm.patchValue({
            description: this.trabalhoEfectuado?.description || ''
        });
        }

    onDialogCloseDesativar(): void {
        this.visibleDialogDesativar = false;
    }

    onDialogCloseEditar(): void {
        this.visibleDialogEditar = false;
        this.newTrabalhoEfectuadoForm.reset();
    }

    changeStatusById(): void {
        this.genericCreateService.executeWithHandling(
            this.trabalhoEfetuadoService.changeStatus(this.trabalhoEfectuado?.id!, false), 'Trabalho Efectuado removido com sucesso'
        ).subscribe(
            {
                next: () => this.goBack(),
                error: () => this.toastr.error('Erro ao remover o trabalho efectuado')
            });
    }


    setUpdate() {
        this.trabalhoEfectuadoDto!.description! = this.newTrabalhoEfectuadoForm.get('description')?.value ?? '';
    }


    resetFormulario() {
        this.trabalhoEfectuado = {
            description: ''
        };
        this.newTrabalhoEfectuadoForm.reset(this.trabalhoEfectuado);
    }


    goBack() {
        this.router.navigate(['/trabalho-efectuado/listagem']);  // Voltar para a página de lista
    }
}
