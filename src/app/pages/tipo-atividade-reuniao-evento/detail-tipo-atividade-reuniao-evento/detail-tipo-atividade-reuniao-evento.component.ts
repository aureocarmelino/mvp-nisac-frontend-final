import { Component, OnInit } from '@angular/core';
import { TipoAtividadeReuniaoEvento } from '../../../api/models/entity/TipoAtividadeReuniaoEvento';
import { TipoAtividadeReuniaoEventoService } from '../../../api/services/tipo-atividade-reuniao-evento.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../../api/services/auth.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { CreateAcaoSubtipoAtividadeReuniaoEventoDto } from '../../../api/models/dto/CreateAcaoSubtipoAtividadeReuniaoEventoDto';
import { GenericCreateService } from '../../../api/services/generic-create.service';

@Component({
    selector: 'app-detail-tipo-atividade-reuniao-evento',
    imports: [CommonModule, ButtonModule, ReactiveFormsModule, DialogModule, FormsModule, InputTextModule],
    templateUrl: './detail-tipo-atividade-reuniao-evento.component.html',
    styleUrl: './detail-tipo-atividade-reuniao-evento.component.scss'
})
export class DetailTipoAtividadeReuniaoEventoComponent implements OnInit {
    tipoAtividade: TipoAtividadeReuniaoEvento | undefined;
    tipoAtividadeDto = new CreateAcaoSubtipoAtividadeReuniaoEventoDto();
    visibleDialogDesativar: boolean = false;
    visibleDialogEditar: boolean = false;

    newForm = new FormGroup({
        description: new FormControl('', Validators.required)
    });

    constructor(public auth: AuthService, private router: Router,
        private genericCreateService: GenericCreateService,
        private activatedRoute: ActivatedRoute, public tipoAtividadeReuniaoEventoService: TipoAtividadeReuniaoEventoService,
        private toastr: ToastrService, private spinner: NgxSpinnerService) { }


    ngOnInit(): void {
        this.spinner.show();

        const id = String(this.activatedRoute.snapshot.paramMap.get('id'));

        this.tipoAtividadeReuniaoEventoService.findById(id).subscribe((response) => {
            this.spinner.hide();
            this.tipoAtividade = response;
        },
            (error) => {
                this.spinner.hide();
                this.toastr.error("Erro ao obter a informação")
                this.router.navigate(['/tipo-atividade-reuniao-evento/listagem']);
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
            description: this.tipoAtividade?.description || ''
        });
    }

    onDialogCloseDesativar(): void {
        this.visibleDialogDesativar = false;
    }

    onDialogCloseEditar(): void {
        this.visibleDialogEditar = false;
        this.newForm.reset();
    }


     setUpdate() {
        this.tipoAtividadeDto!.description! = this.newForm.get('description')?.value ?? '';
    }


    update(event: Event): void {
        event.preventDefault();

        // this.spinner.show();

        this.setUpdate()

        if (this.newForm.valid) {
            this.genericCreateService.executeWithHandling(
                this.tipoAtividadeReuniaoEventoService.update(this.tipoAtividade?.id!, this.tipoAtividadeDto!), 'Informação atualizada com sucesso'
            ).subscribe(
                {
                    next: async (update: TipoAtividadeReuniaoEvento) => {

                        this.tipoAtividade = update; // Atualiza na hora
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

    changeStatusById(): void {
        this.genericCreateService.executeWithHandling(
            this.tipoAtividadeReuniaoEventoService.changeStatus(this.tipoAtividade?.id!, false), 'Informação removida com sucesso'
        ).subscribe(
            {
                next: () => this.goBack(),
                error: () => this.toastr.error('Erro ao remover')
            });
    }

    goBack() {
        this.router.navigate(['/tipo-atividade-reuniao-evento/listagem']);  // Voltar para a página de lista
    }
}

