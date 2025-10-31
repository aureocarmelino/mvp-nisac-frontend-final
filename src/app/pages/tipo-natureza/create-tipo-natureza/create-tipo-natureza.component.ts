import { Component, OnInit } from '@angular/core';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { SpinnerComponent } from '../../../components/loader/spinner/spinner.component';
import { BreadcrumbComponent } from '../../../components/breadcrumb/breadcrumb.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { FluidModule } from 'primeng/fluid';
import { ButtonModule } from 'primeng/button';
import { GrupoNaturezaOcorrencia } from '../../../api/models/entity/GrupoNaturezaOcorrencia';
import { CreateTipoNaturezaOcorrenciaDto } from '../../../api/models/dto/CreateTipoNaturezaOcorrenciaDto';
import { MenuItem } from 'primeng/api';
import { TipoNaturezaOcorrenciaService } from '../../../api/services/tipo-natureza-ocorrencia.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { GrupoNaturezaOcorrenciaService } from '../../../api/services/grupo-natureza-ocorrencia.service';
import { GenericCreateService } from '../../../api/services/generic-create.service';

@Component({
  selector: 'app-create-tipo-natureza',
  imports: [SpinnerComponent, BreadcrumbComponent, ReactiveFormsModule, InputTextModule, FluidModule,  ButtonModule,
                ToastrModule, AutoCompleteModule],
  templateUrl: './create-tipo-natureza.component.html',
  styleUrl: './create-tipo-natureza.component.scss'
})
export class CreateTipoNaturezaComponent implements OnInit
{

  valSwitch: boolean = false;
  grupoNaturezaItens: GrupoNaturezaOcorrencia[] = [];
  newTipoNaturezaOcorrencia: CreateTipoNaturezaOcorrenciaDto = new CreateTipoNaturezaOcorrenciaDto();
  newTipoNaturezaOcorrenciaForm!: FormGroup;


  filteredGrupoNaturezaOcorrencias: any[] = [];
  selectedGrupoNaturezaOcorrencia!: GrupoNaturezaOcorrencia;

  items: MenuItem[] | undefined;

  constructor(public tipoNaturezaOcorrenciaService : TipoNaturezaOcorrenciaService, public grupoNaturezaOcorrenciaService : GrupoNaturezaOcorrenciaService,
    private toastr: ToastrService, private spinner: NgxSpinnerService, private genericCreateService: GenericCreateService) { }


    ngOnInit(): void
    {
      this.items =
      [
        { label: "Dashboard", routerLink: '/'},
        { label: 'Listagem de Tipo Natureza Ocorrência', routerLink: '/tipo-natureza-ocorrencia/listagem'},
        { label: 'Registo de Tipo Natureza Ocorrência', id: "current" }
      ];

      this.loadGrupoNaturezaOcorrencia();

      this.newTipoNaturezaOcorrenciaForm = new FormGroup(
      {
        grupoNaturezaOcorrencia: new FormControl('', Validators.required),
        code: new FormControl('', Validators.required),
        description: new FormControl('', Validators.required,),
      });

    }


    filterGrupoNaturezaOcorrencia(event: any)
    {
      const grupoNaturezaOcorrenciaFiltrada: GrupoNaturezaOcorrencia[] = [];
      const query = event.query;

      for (let i = 0; i < this.grupoNaturezaItens.length; i++)
      {
          const grupoNatureza = this.grupoNaturezaItens[i];

          if (grupoNatureza.description!.toLowerCase().indexOf(query.toLowerCase()) == 0)
          {
            grupoNaturezaOcorrenciaFiltrada.push(grupoNatureza);
          }
      }
      this.filteredGrupoNaturezaOcorrencias = grupoNaturezaOcorrenciaFiltrada;
    }




    loadGrupoNaturezaOcorrencia()
    {
      this.grupoNaturezaOcorrenciaService.findAll().subscribe((res) =>
      {
        this.grupoNaturezaItens = res;
      }
     );
    }


    add(event: Event): void
    {
      event.preventDefault();

      this.setCreateTipoNatureza(); // Configuração específica para o formulário atual

      if(this.newTipoNaturezaOcorrenciaForm.valid)
      {
        this.genericCreateService.executeWithHandling(
          this.tipoNaturezaOcorrenciaService.create(this.newTipoNaturezaOcorrencia),'Tipo Natureza criada com sucesso'
        ).subscribe(
        {
          next: () => this.resetFormulario(),
          error: () => this.toastr.error('Erro ao criar tipo natureza') // Erro tratado pelo BaseService
        });
      }
      else
      {
        this.spinner.hide();
        this.genericCreateService.messageErrorInvalidForm("Verifique se todos os campos estão preenchidos correctamente")
      }
    }

    setCreateTipoNatureza()
    {
      this.newTipoNaturezaOcorrencia.grupoNaturezaOcorrencia = this.newTipoNaturezaOcorrenciaForm.get('grupoNaturezaOcorrencia')?.value.id ?? '';
      this.newTipoNaturezaOcorrencia.description = this.newTipoNaturezaOcorrenciaForm.get('description')?.value ?? '';
      this.newTipoNaturezaOcorrencia.code = this.newTipoNaturezaOcorrenciaForm.get('code')?.value ?? '';
    }

    resetFormulario()
    {
      this.newTipoNaturezaOcorrencia = {
        grupoNaturezaOcorrencia: undefined,
        description: '',
        code: undefined
      };
      this.newTipoNaturezaOcorrenciaForm.reset(this.newTipoNaturezaOcorrencia);
    }
}

