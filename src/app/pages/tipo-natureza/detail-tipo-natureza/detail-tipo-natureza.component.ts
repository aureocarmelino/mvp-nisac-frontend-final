import { Component, OnInit } from '@angular/core';
import { TipoNaturezaOcorrencia } from '../../../api/models/entity/TipoNaturezaOcorrencia';
import { CreateTipoNaturezaOcorrenciaDto } from '../../../api/models/dto/CreateTipoNaturezaOcorrenciaDto';
import { GrupoNaturezaOcorrencia } from '../../../api/models/entity/GrupoNaturezaOcorrencia';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Freguesia } from '../../../api/models/entity/Freguesia';
import { AuthService } from '../../../api/services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { GenericCreateService } from '../../../api/services/generic-create.service';
import { GrupoNaturezaOcorrenciaService } from '../../../api/services/grupo-natureza-ocorrencia.service';
import { TipoAtividadeReuniaoEventoService } from '../../../api/services/tipo-atividade-reuniao-evento.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { TipoNaturezaOcorrenciaService } from '../../../api/services/tipo-natureza-ocorrencia.service';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { AutoCompleteModule } from 'primeng/autocomplete';

@Component({
  selector: 'app-detail-tipo-natureza',
  imports: [CommonModule, ButtonModule, ReactiveFormsModule, DialogModule, FormsModule, InputTextModule, AutoCompleteModule],
  templateUrl: './detail-tipo-natureza.component.html',
  styleUrl: './detail-tipo-natureza.component.scss'
})
export class DetailTipoNaturezaComponent implements OnInit {

    tipoNaturezaOcorrencia: TipoNaturezaOcorrencia | undefined;
    createTipoNaturezaOcorrenciaDto = new CreateTipoNaturezaOcorrenciaDto();
    visibleDialogDesativar: boolean = false;
    visibleDialogEditar: boolean = false;

    grupoNaturezaItens: GrupoNaturezaOcorrencia[] = [];
    filteredGrupos: any[] = [];

    newForm = new FormGroup({
        grupoNaturezaOcorrencia: new FormControl<GrupoNaturezaOcorrencia | null>(null, Validators.required),
        description: new FormControl<string | null>('', Validators.required),
        code: new FormControl<number | null>(null, Validators.required)
    });

    constructor(public auth: AuthService, private router: Router,
        private genericCreateService: GenericCreateService,
        public grupoNaturezaOcorrenciaService: GrupoNaturezaOcorrenciaService,
        private activatedRoute: ActivatedRoute, public tipoNaturezaOcorrenciaService: TipoNaturezaOcorrenciaService,
        private toastr: ToastrService,
        private spinner: NgxSpinnerService) { }


    ngOnInit(): void {
        this.spinner.show();

        const id = String(this.activatedRoute.snapshot.paramMap.get('id'));

        this.tipoNaturezaOcorrenciaService.findById(id).subscribe((response) => {
            this.spinner.hide();
            this.tipoNaturezaOcorrencia = response;
        },
            (error) => {
                this.spinner.hide();
                this.toastr.error("Erro ao obter a informação")
                this.router.navigate(['/tipo-natureza-ocorrencia/listagem']);
            }
        );
    }

    showDialogDesativar() {
        //this.showDialogDesativar()
        this.visibleDialogDesativar = true;
    }

    showDialogEditar() {

        // Garante que os itens da combobox já foram carregados
        if (!this.grupoNaturezaItens || this.grupoNaturezaItens.length === 0) {
            this.loadGruposNatureza();
        }


        // Preenche o formulário com os dados do objeto atual
        this.newForm.patchValue({
            grupoNaturezaOcorrencia: this.tipoNaturezaOcorrencia?.grupoNaturezaOcorrencia ?? null,
            description: this.tipoNaturezaOcorrencia?.description ?? '',
            code: this.tipoNaturezaOcorrencia?.code ?? null
        });


        // Exibe o diálogo
        this.visibleDialogEditar = true;
    }

    loadGruposNatureza(): void
    {
        this.grupoNaturezaOcorrenciaService.findAll().subscribe(res =>
        {
            this.grupoNaturezaItens = res;

            // Garante que o item atual (em modo edição) está incluído
            const atual = this.tipoNaturezaOcorrencia?.grupoNaturezaOcorrencia;
            if (atual && !this.grupoNaturezaItens.some(t => t.id === atual.id))
            {
                this.grupoNaturezaItens.push(atual);
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


    update(event: Event): void
    {
        event.preventDefault();

        // this.spinner.show();

        this.setUpdate()

        if (this.newForm.valid) {
            this.genericCreateService.executeWithHandling(
                this.tipoNaturezaOcorrenciaService.update(this.tipoNaturezaOcorrencia?.id!, this.createTipoNaturezaOcorrenciaDto!), 'Tipo de natureza atualizada com sucesso'
            ).subscribe(
                {
                    next: async (update: TipoNaturezaOcorrencia) => {
                        this.tipoNaturezaOcorrencia = update; // Atualiza na hora
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
        this.createTipoNaturezaOcorrenciaDto!.description = this.newForm.get('description')?.value ?? '';
         this.createTipoNaturezaOcorrenciaDto!.code = this.newForm.get('code')?.value ?? undefined;
        this.createTipoNaturezaOcorrenciaDto!.grupoNaturezaOcorrencia =
            this.newForm.get('grupoNaturezaOcorrencia')?.value?.id ?? undefined;
    }


    changeStatusById(): void {
        this.genericCreateService.executeWithHandling(
            this.tipoNaturezaOcorrenciaService.changeStatus(this.tipoNaturezaOcorrencia?.id!, false), 'Tipo de natureza removida com sucesso'
        ).subscribe(
            {
                next: () => this.goBack(),
                error: () => this.toastr.error('Erro ao remover')
            });
    }


    filterGrupos(event: any) {
        const grupoFiltrado: GrupoNaturezaOcorrencia[] = [];
        const query = event.query;

        for (let i = 0; i < this.grupoNaturezaItens.length; i++) {
            const grupo = this.grupoNaturezaItens[i];

            if (grupo.description!.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                grupoFiltrado.push(grupo);
            }
        }
        this.filteredGrupos = grupoFiltrado;
    }


    goBack() {
        this.router.navigate(['/tipo-natureza-ocorrencia/listagem']);  // Voltar para a página de lista
    }
}
