import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { AtividadeComplementar } from '../../../api/models/entity/AtividadeComplementar';
import { AuthService } from '../../../api/services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AtividadeComplementarService } from '../../../api/services/atividade-complementar.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { CreateAtividadeComplementarDto } from '../../../api/models/dto/CreateAtividadeComplementarDto';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { GenericCreateService } from '../../../api/services/generic-create.service';

@Component({
    selector: 'app-detail-atividade-complementar',
    imports: [CommonModule, ButtonModule, ReactiveFormsModule, DialogModule, FormsModule, InputTextModule],
    templateUrl: './detail-atividade-complementar.component.html',
    styleUrl: './detail-atividade-complementar.component.scss'
})
export class DetailAtividadeComplementarComponent implements OnInit {
    atividadeComplementar: AtividadeComplementar | undefined;
    createAtividadeComplementarDto = new CreateAtividadeComplementarDto();
    visibleDialogDesativar: boolean = false;
    visibleDialogEditar: boolean = false;

    newForm = new FormGroup({
        description: new FormControl('', Validators.required)

    });

    constructor(public auth: AuthService, private router: Router,
        private genericCreateService: GenericCreateService,
        private activatedRoute: ActivatedRoute, public atividadeComplementarService: AtividadeComplementarService,
        private toastr: ToastrService, private spinner: NgxSpinnerService) { }


    ngOnInit(): void {
        this.spinner.show();

        const id = String(this.activatedRoute.snapshot.paramMap.get('id'));

        this.atividadeComplementarService.findById(id).subscribe((response) => {
            this.spinner.hide();
            this.atividadeComplementar = response;
        },
            (error) => {
                this.spinner.hide();
                this.toastr.error("Erro ao obter a informação")
                this.router.navigate(['/atividade-complementar/listagem']);
            }
        );
    }


    showDialogDesativar() {
        //this.showDialogDesativar()
        this.visibleDialogDesativar = true;
    }

    showDialogEditar() {

        this.visibleDialogEditar = true;
        this.newForm.patchValue({
            description: this.atividadeComplementar?.description || ''
        });
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
                this.atividadeComplementarService.update(this.atividadeComplementar?.id!, this.createAtividadeComplementarDto!), 'Atividade complementar atualizada com sucesso'
            ).subscribe(
                {
                    next: async (update: AtividadeComplementar) => {

                        this.atividadeComplementar = update; // Atualiza na hora
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
        this.createAtividadeComplementarDto!.description! = this.newForm.get('description')?.value ?? '';
    }


    changeStatusById(): void {
        this.genericCreateService.executeWithHandling(
            this.atividadeComplementarService.changeStatus(this.atividadeComplementar?.id!, false), 'Atividade complementar removida com sucesso'
        ).subscribe(
            {
                next: () => this.goBack(),
                error: () => this.toastr.error('Erro ao remover o trabalho efectuado')
            });
    }



    goBack() {
        this.router.navigate(['/atividade-complementar/listagem']);  // Voltar para a página de lista
    }
}

