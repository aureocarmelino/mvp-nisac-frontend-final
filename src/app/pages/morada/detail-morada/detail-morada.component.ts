import { Component, OnInit } from '@angular/core';
import { Morada } from '../../../api/models/entity/Morada';
import { AuthService } from '../../../api/services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MoradaService } from '../../../api/services/morada.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { ButtonModule } from 'primeng/button';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { CreateMoradaDto } from '../../../api/models/dto/CreateMoradaDto';
import { GenericCreateService } from '../../../api/services/generic-create.service';
import { Freguesia } from '../../../api/models/entity/Freguesia';
import { FreguesiaService } from '../../../api/services/freguesia.service';
import { AutoCompleteModule } from 'primeng/autocomplete';

@Component({
    selector: 'app-detail-morada',
    imports: [CommonModule, ButtonModule, ReactiveFormsModule, DialogModule, FormsModule, InputTextModule, AutoCompleteModule],
    templateUrl: './detail-morada.component.html',
    styleUrl: './detail-morada.component.scss'
})
export class DetailMoradaComponent implements OnInit {
    morada: Morada | undefined;
    createMoradaDto = new CreateMoradaDto();
    visibleDialogDesativar: boolean = false;
    visibleDialogEditar: boolean = false;

    freguesiaItens: Freguesia[] = [];
    filteredFreguesias: any[] = [];

    newForm = new FormGroup({
        freguesia: new FormControl<Freguesia | null>(null, Validators.required),
        rua: new FormControl<string | null>('', Validators.required)
    });

    constructor(public auth: AuthService, private router: Router,
        private genericCreateService: GenericCreateService,
        public freguesiaService: FreguesiaService,
        private activatedRoute: ActivatedRoute, public moradaService: MoradaService,
        private toastr: ToastrService,
        private spinner: NgxSpinnerService) { }


    ngOnInit(): void {
        this.spinner.show();

        const id = String(this.activatedRoute.snapshot.paramMap.get('id'));

        this.moradaService.findById(id).subscribe((response) => {
            this.spinner.hide();
            this.morada = response;
        },
            (error) => {
                this.spinner.hide();
                this.toastr.error("Erro ao obter a informação")
                this.router.navigate(['/morada/listagem']);
            }
        );
    }

    showDialogDesativar() {
        //this.showDialogDesativar()
        this.visibleDialogDesativar = true;
    }

    showDialogEditar() {

        // Garante que os itens da combobox já foram carregados
        if (!this.freguesiaItens || this.freguesiaItens.length === 0) {
            this.loadFreguesias();
        }


        // Preenche o formulário com os dados do objeto atual
        this.newForm.patchValue({
            freguesia: this.morada?.freguesia ?? null,
            rua: this.morada?.rua ?? ''
        });


        // Exibe o diálogo
        this.visibleDialogEditar = true;
    }

    loadFreguesias(): void {
        this.freguesiaService.findAll().subscribe(res => {
            this.freguesiaItens = res;

            // Garante que o item atual (em modo edição) está incluído
            const atual = this.morada?.freguesia;
            if (atual && !this.freguesiaItens.some(t => t.id === atual.id)) {
                this.freguesiaItens.push(atual);
            }
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
                this.moradaService.update(this.morada?.id!, this.createMoradaDto!), 'Morada atualizada com sucesso'
            ).subscribe(
                {
                    next: async (update: Morada) => {

                        this.morada = update; // Atualiza na hora
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
        this.createMoradaDto!.rua = this.newForm.get('rua')?.value ?? '';
        this.createMoradaDto!.freguesia =
            this.newForm.get('freguesia')?.value?.id ?? undefined;
    }


    changeStatusById(): void {
        this.genericCreateService.executeWithHandling(
            this.moradaService.changeStatus(this.morada?.id!, false), 'Morada removida com sucesso'
        ).subscribe(
            {
                next: () => this.goBack(),
                error: () => this.toastr.error('Erro ao remover')
            });
    }


    filterFreguesias(event: any) {
        const freguesiaFiltrada: Freguesia[] = [];
        const query = event.query;

        for (let i = 0; i < this.freguesiaItens.length; i++) {
            const freguesia = this.freguesiaItens[i];

            if (freguesia.description!.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                freguesiaFiltrada.push(freguesia);
            }
        }
        this.filteredFreguesias = freguesiaFiltrada;
    }


    goBack() {
        this.router.navigate(['/morada/listagem']);  // Voltar para a página de lista
    }
}
