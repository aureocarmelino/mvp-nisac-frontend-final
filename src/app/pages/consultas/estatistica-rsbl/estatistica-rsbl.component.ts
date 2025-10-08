import { Component, OnInit } from '@angular/core';
import { BreadcrumbComponent } from '../../../components/breadcrumb/breadcrumb.component';
import { CommonModule } from '@angular/common';
import { TableModule} from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DatePickerModule } from 'primeng/datepicker';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FluidModule } from 'primeng/fluid';
import { TagModule } from 'primeng/tag';
import { ToastModule } from 'primeng/toast';
import { RatingModule } from 'primeng/rating';
import { EstatisticaService } from '../../../api/services/estatistica.service';
import { MenuItem } from 'primeng/api';
import { RsblOcorrenciaFilter } from '../../../api/models/dto/rsbl/RsblOcorrenciaFilter';
import { ResumoRsblDto } from '../../../api/models/dto/rsbl/ResumoRsblDto';
import { format } from 'date-fns';
import { Divider } from 'primeng/divider';

@Component({
  selector: 'app-estatistica-rsbl',
  imports: [BreadcrumbComponent, CommonModule, ButtonModule, InputTextModule, DatePickerModule, TableModule,
      ReactiveFormsModule, FluidModule, TableModule, TagModule, ToastModule, RatingModule, ButtonModule, Divider
    ],
  templateUrl: './estatistica-rsbl.component.html',
  styleUrl: './estatistica-rsbl.component.scss'
})
export class EstatisticaRsblComponent implements OnInit
{
    items: MenuItem[] | undefined;
    first: number = 0;
    pageSize: number = 5;
    totalRecords: number = 0;
    rowsPerPageOptions: number[] = [5, 10, 15, 20];
    loading: boolean = true;

    resumoRsbl!: ResumoRsblDto;

    totalGrupoNaturezas!: string;
    totalAtividadesComplementares!:  string;
    totalGeral!:  string;

      rsblOcorrenciaFilter: RsblOcorrenciaFilter = new RsblOcorrenciaFilter();

      expandedRows: { [key: number]: boolean } = {};


      pesquisaAvancaRsblForm = new FormGroup({
        nomeCompleto: new FormControl(''),
        dataInicio: new FormControl(''),
        dataFim: new FormControl('')
      });

    constructor(public estatisticaService : EstatisticaService)
    {

    }


    ngOnInit()
    {
    this.items =
    [
        { label: "Dashboard", routerLink: '/'},
        { label: 'Estatistica',  routerLink: '/estatistica' },
        { label: 'RSBL', id: "current" }
    ];
    }



  /*  expandAll(): void {
        this.expandedRows = this.resumoRsbl.gruposNaturezas.reduce((acc, row) => {
          if (
            row.id !== undefined &&
            row.id !== null &&
            row.tiposDeNatureza &&
            row.tiposDeNatureza.length > 0
          ) {
            acc[row.id |] = true;
          }
          return acc;
        }, {} as { [key: number]: boolean });
      }*/



     /* collapseAll(): void
      {
        this.expandedRows = {};
      }*/

      toggleRow(row: any): void {
        const id = row.id;
        if (this.expandedRows[id]) {
          delete this.expandedRows[id];
        } else {
          this.expandedRows[id] = true;
        }

        // Força detecção de mudança
        this.expandedRows = { ...this.expandedRows };
      }





    pesquisar()
    {
    // this.spinner.show()
        this.loading = true;

        this.setResumoRsblDto();

        const first = this.first || 0;
        const rows = this.pageSize || 5;

        const page = first / rows;
        const size = rows;


        this.estatisticaService.obterResumoRsbl(this.rsblOcorrenciaFilter, page, size).subscribe((res) => {

            this.loading = false;
            //this.spinner.hide();

            this.resumoRsbl = res;

            this.totalGrupoNaturezas = res.totalNaturezas;
            this.totalAtividadesComplementares = res.totalAtividadesComplementares;
            this.totalGeral = res.totalGeral;


            console.log(this.resumoRsbl.gruposNaturezas);

        },
        (err) =>
        {
        // this.spinner.hide()
            //this.toastr.error("Erro ao carregar a tabela com pesquisa avançada");
        // this.loading = false;
            console.log(err)
        }
        );

        //console.log("State Actual em Pesquisa Avançada: " +  localStorage.getItem('tableState'))

    }


     setResumoRsblDto()
      {
        this.rsblOcorrenciaFilter.nomeCompleto = this.pesquisaAvancaRsblForm.get('nomeCompleto')?.value ?? '';

        const dataInicioValue = this.pesquisaAvancaRsblForm.get('dataInicio')?.value;
        this.rsblOcorrenciaFilter.dataInicio = dataInicioValue ? format(dataInicioValue, 'yyyy-MM-dd') : '';

        const dataFimValue = this.pesquisaAvancaRsblForm.get('dataFim')?.value;
        this.rsblOcorrenciaFilter.dataFim = dataFimValue ? format(dataFimValue, 'yyyy-MM-dd') : '';


        console.log(this.rsblOcorrenciaFilter)

        //this.saidaAbtm.motivo = this.pesquisaAvancaSaidaAbtmForm.get('motivo')?.value ?? '';
        //this.saidaAbtm.observacoes = this.pesquisaAvancaSaidaAbtmForm.get('observacoes')?.value ?? '';
      }

}
