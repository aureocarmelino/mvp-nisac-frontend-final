import { Component, OnInit } from '@angular/core';
import { TipoEquipamento } from '../../../api/models/entity/TipoEquipamento';
import { AuthService } from '../../../api/services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MoradaService } from '../../../api/services/morada.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { TipoEquipamentoService } from '../../../api/services/tipo-equipamento.service';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { CreateTipoEquipamentoDto } from '../../../api/models/dto/CreateTipoEquipamentoDto';
import { GenericCreateService } from '../../../api/services/generic-create.service';

@Component({
    selector: 'app-detail-tipo-equipamento',
    imports: [CommonModule, ButtonModule, ReactiveFormsModule, DialogModule, FormsModule, InputTextModule],
    templateUrl: './detail-tipo-equipamento.component.html',
    styleUrl: './detail-tipo-equipamento.component.scss'
})
export class DetailTipoEquipamentoComponent implements OnInit {

    tipoEquipamento: TipoEquipamento | undefined;
    createTipoEquipamentoDto = new CreateTipoEquipamentoDto();
    visibleDialogDesativar: boolean = false;
    visibleDialogEditar: boolean = false;

    newTipoEquipamentoForm = new FormGroup({
        description: new FormControl('', Validators.required)
    });

    constructor(public auth: AuthService, private router: Router,
        private genericCreateService: GenericCreateService,
        private activatedRoute: ActivatedRoute, public tipoEquipamentoService: TipoEquipamentoService,
        private toastr: ToastrService, private spinner: NgxSpinnerService) { }


    ngOnInit(): void {
        this.spinner.show();

        const id = String(this.activatedRoute.snapshot.paramMap.get('id'));

        this.tipoEquipamentoService.findById(id).subscribe((response) => {
            this.spinner.hide();
            this.tipoEquipamento = response;
        },
            (error) => {
                this.spinner.hide();
                this.toastr.error("Erro ao obter a informação")
                this.router.navigate(['/tipo-equipamento/listagem']);
            }
        );
    }


    showDialogDesativar() {
        //this.showDialogDesativar()
        this.visibleDialogDesativar = true;
    }

    showDialogEditar() {

        this.visibleDialogEditar = true;
        this.newTipoEquipamentoForm.patchValue({
            description: this.tipoEquipamento?.description || ''
        });
    }

    onDialogCloseDesativar(): void {
        this.visibleDialogDesativar = false;
    }

    onDialogCloseEditar(): void {
        this.visibleDialogEditar = false;
        this.newTipoEquipamentoForm.reset();
    }


    updateTipoEquipamente(event: Event): void {
            event.preventDefault();

           // this.spinner.show();

            this.setUpdate()

            if (this.newTipoEquipamentoForm.valid) {
                this.genericCreateService.executeWithHandling(
                    this.tipoEquipamentoService.update(this.tipoEquipamento?.id!, this.createTipoEquipamentoDto!), 'Tipo Equipamento atualizado com sucesso'
                ).subscribe(
                    {
                        next: async (update: TipoEquipamento) => {

                            this.tipoEquipamento = update; // Atualiza na hora
                            this.visibleDialogEditar = false;

                        },
                        error: () => { this.spinner.hide(); this.toastr.error('Erro ao atualizar tipo de equipamento ') }
                    });
            }
            else {
                this.spinner.hide();
                this.genericCreateService.messageErrorInvalidForm("Verifique se todos os campos estão preenchidos correctamente");
            }
        }




    setUpdate() {
        this.createTipoEquipamentoDto!.description! = this.newTipoEquipamentoForm.get('description')?.value ?? '';
    }


    changeStatusById(): void {
        this.genericCreateService.executeWithHandling(
            this.tipoEquipamentoService.changeStatus(this.tipoEquipamento?.id!, false), 'Tipo de Equipamento removido com sucesso'
        ).subscribe(
            {
                next: () => this.goBack(),
                error: () => this.toastr.error('Erro ao remover o trabalho efectuado')
            });
    }



    goBack() {
        this.router.navigate(['/tipo-equipamento/listagem']);  // Voltar para a página de lista
    }
}

