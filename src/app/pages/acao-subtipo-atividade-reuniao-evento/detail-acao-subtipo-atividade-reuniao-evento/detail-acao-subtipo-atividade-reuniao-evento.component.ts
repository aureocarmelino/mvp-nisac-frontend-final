import { Component, OnInit } from '@angular/core';
import { AcaoSubTipoAtividadeReuniaoEvento } from '../../../api/models/entity/AcaoSubTipoAtividadeReuniaoEvento';
import { CreateAcaoSubtipoAtividadeReuniaoEventoDto } from '../../../api/models/dto/CreateAcaoSubtipoAtividadeReuniaoEventoDto';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../api/services/auth.service';
import { GenericCreateService } from '../../../api/services/generic-create.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { AcaoSubtipoAtividadeReuniaoEventoService } from '../../../api/services/acao-subtipo-atividade-reuniao-evento.service';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { TipoAtividadeReuniaoEventoService } from '../../../api/services/tipo-atividade-reuniao-evento.service';
import { TipoAtividadeReuniaoEvento } from '../../../api/models/entity/TipoAtividadeReuniaoEvento';
import { AutoCompleteModule } from 'primeng/autocomplete';

@Component({
    selector: 'app-detail-acao-subtipo-atividade-reuniao-evento',
    imports: [CommonModule, ButtonModule, ReactiveFormsModule, DialogModule, FormsModule, InputTextModule, AutoCompleteModule],
    templateUrl: './detail-acao-subtipo-atividade-reuniao-evento.component.html',
    styleUrl: './detail-acao-subtipo-atividade-reuniao-evento.component.scss'
})
export class DetailAcaoSubtipoAtividadeReuniaoEventoComponent implements OnInit {

    acao: AcaoSubTipoAtividadeReuniaoEvento | undefined;
    acaoDto = new CreateAcaoSubtipoAtividadeReuniaoEventoDto();
    visibleDialogDesativar: boolean = false;
    visibleDialogEditar: boolean = false;
    tipoAtividadeReuniaoEventoItens: TipoAtividadeReuniaoEvento[] = [];
    filteredTipoAtividadeReuniaoEventos: any[] = [];


    newForm = new FormGroup({
        tipoAtividadeReuniaoEvento: new FormControl<TipoAtividadeReuniaoEvento | null>(null, Validators.required),
        description: new FormControl<string | null>('', Validators.required)
    });


    constructor(public auth: AuthService, private router: Router,
        public tipoAtividadeReuniaoEventoService: TipoAtividadeReuniaoEventoService,
        private genericCreateService: GenericCreateService,
        private activatedRoute: ActivatedRoute, public acaoService: AcaoSubtipoAtividadeReuniaoEventoService,
        private toastr: ToastrService, private spinner: NgxSpinnerService) { }


    ngOnInit(): void {

        this.spinner.show();

        const id = String(this.activatedRoute.snapshot.paramMap.get('id'));

        this.acaoService.findById(id).subscribe((response) => {
            this.spinner.hide();
            this.acao = response;
        },
            (error) => {
                this.spinner.hide();
                this.toastr.error("Erro ao obter a informação")
                this.router.navigate(['/acao-subtipo-atividade-reuniao-evento/listagem']);
            }
        );
    }


    showDialogDesativar() {

        this.visibleDialogDesativar = true;
    }

    showDialogEditar() {

        // Garante que os itens da combobox já foram carregados
        if (!this.tipoAtividadeReuniaoEventoItens || this.tipoAtividadeReuniaoEventoItens.length === 0) {
            this.loadTipoAtividadeReuniaoEvento();
        }


        // Preenche o formulário com os dados do objeto atual
        this.newForm.patchValue({
            tipoAtividadeReuniaoEvento: this.acao?.tipoAtividadeReuniaoEvento ?? null,
            description: this.acao?.description ?? ''
        });


        // Exibe o diálogo
        this.visibleDialogEditar = true;
    }


    loadTipoAtividadeReuniaoEvento(): void {
        this.tipoAtividadeReuniaoEventoService.findAllTipoAtividadeReuniaoEvento().subscribe(res => {
            this.tipoAtividadeReuniaoEventoItens = res;

            // Garante que o item atual (em modo edição) está incluído
            const atual = this.acao?.tipoAtividadeReuniaoEvento;
            if (atual && !this.tipoAtividadeReuniaoEventoItens.some(t => t.id === atual.id)) {
                this.tipoAtividadeReuniaoEventoItens.push(atual);
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
                this.acaoService.update(this.acao?.id!, this.acaoDto!), 'Informação atualizada com sucesso'
            ).subscribe(
                {
                    next: async (update: AcaoSubTipoAtividadeReuniaoEvento) => {

                        this.acao = update; // Atualiza na hora
                        this.visibleDialogEditar = false;

                    },
                    error: () => { this.spinner.hide(); this.toastr.error('Erro ao atualizar informação') }
                });
        }
        else {
            this.spinner.hide();
            this.genericCreateService.messageErrorInvalidForm("Verifique se todos os campos estão preenchidos correctamente");
        }
    }




    setUpdate() {
        this.acaoDto!.description = this.newForm.get('description')?.value ?? '';
        this.acaoDto!.tipoAtividadeReuniaoEvento =
            this.newForm.get('tipoAtividadeReuniaoEvento')?.value?.id ?? undefined;
    }


     filterTipoAtividadeReuniaoEvento(event: any)
    {
      const tipoAtividadeReuniaoEventoFiltrada: TipoAtividadeReuniaoEvento[] = [];
      const query = event.query;

      for (let i = 0; i < this.tipoAtividadeReuniaoEventoItens.length; i++)
      {
          const tipoAtividadeReuniaoEvento = this.tipoAtividadeReuniaoEventoItens[i];

          if (tipoAtividadeReuniaoEvento.description!.toLowerCase().indexOf(query.toLowerCase()) == 0)
          {
            tipoAtividadeReuniaoEventoFiltrada.push(tipoAtividadeReuniaoEvento);
          }
      }
      this.filteredTipoAtividadeReuniaoEventos = tipoAtividadeReuniaoEventoFiltrada;
    }


    changeStatusById(): void {
        this.genericCreateService.executeWithHandling(
            this.acaoService.changeStatus(this.acao?.id!, false), 'Informação removida com sucesso'
        ).subscribe(
            {
                next: () => this.goBack(),
                error: () => this.toastr.error('Erro ao remover')
            });
    }



    goBack() {
        this.router.navigate(['/acao-subtipo-atividade-reuniao-evento/listagem']);  // Voltar para a página de lista
    }
}

