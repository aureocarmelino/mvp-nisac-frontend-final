import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { BreadcrumbComponent } from '../../../components/breadcrumb/breadcrumb.component';
import { CommonModule, NgStyle } from '@angular/common';
import { TableModule, TableRowCollapseEvent, TableRowExpandEvent } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';


import { DatePickerModule } from 'primeng/datepicker';
import { EstatisticaService } from '../../../api/services/estatistica.service';
import { DdsOcorrenciaFilter } from '../../../api/models/dto/dds/DdsOcorrenciaFilter';
import { ResumoDdsDto } from '../../../api/models/dto/dds/ResumoDdsDto';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { format } from 'date-fns';
import { FluidModule } from 'primeng/fluid';
import { TagModule } from 'primeng/tag';
import { ToastModule } from 'primeng/toast';
import { RatingModule } from 'primeng/rating';




@Component({
  selector: 'app-estatistica-dds',
  imports: [BreadcrumbComponent, CommonModule, ButtonModule, InputTextModule, DatePickerModule, TableModule,
    ReactiveFormsModule, FluidModule, TableModule, TagModule, ToastModule, RatingModule, ButtonModule,
  ],
  templateUrl: './estatistica-dds.component.html',
  styleUrl: './estatistica-dds.component.scss'
})
export class EstatisticaDdsComponent implements OnInit
{
  items: MenuItem[] | undefined;
  first: number = 0;
  pageSize: number = 5;
  totalRecords: number = 0;
  rowsPerPageOptions: number[] = [5, 10, 15, 20];
  loading: boolean = true;
  resumoDds: ResumoDdsDto[] = [];

  totalDiretas: number = 0;
  totalIndiretas: number = 0;
  totalGeral: number = 0;

  ddsOcorrenciaFilter: DdsOcorrenciaFilter = new DdsOcorrenciaFilter();

  expandedRows: { [key: number]: boolean } = {};


  pesquisaAvancaDdsForm = new FormGroup({
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
        { label: 'DDS', id: "current" }
    ];
  }

  expandAll(): void {
    this.expandedRows = this.resumoDds.reduce((acc, row) => {
      if (
        row.id !== undefined &&
        row.id !== null &&
        row.atividadesComplementares &&
        row.atividadesComplementares.length > 0
      ) {
        acc[row.id] = true;
      }
      return acc;
    }, {} as { [key: number]: boolean });
  }



  collapseAll(): void
  {
    this.expandedRows = {};
  }
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

    this.setResumoDdsDto();

    const first = this.first || 0;
    const rows = this.pageSize || 5;

    const page = first / rows;
    const size = rows;


    this.estatisticaService.obterResumoDdsPaginado(this.ddsOcorrenciaFilter, page, size).subscribe((res) => {

        this.loading = false;
       // this.spinner.hide();
        this.resumoDds = res.ddsOcorrenciaList.content;
        this.totalRecords = res.ddsOcorrenciaList.totalElements;
        this.totalDiretas = res.totalDiretas;
        this.totalIndiretas = res.totalIndiretas;
        this.totalGeral = res.totalGeral;

        console.log(this.resumoDds);

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

  setResumoDdsDto()
  {
    this.ddsOcorrenciaFilter.nomeCompleto = this.pesquisaAvancaDdsForm.get('nomeCompleto')?.value ?? '';

    const dataInicioValue = this.pesquisaAvancaDdsForm.get('dataInicio')?.value;
    this.ddsOcorrenciaFilter.dataInicio = dataInicioValue ? format(dataInicioValue, 'yyyy-MM-dd') : '';

    const dataFimValue = this.pesquisaAvancaDdsForm.get('dataFim')?.value;
    this.ddsOcorrenciaFilter.dataFim = dataFimValue ? format(dataFimValue, 'yyyy-MM-dd') : '';


    console.log(this.ddsOcorrenciaFilter)

    //this.saidaAbtm.motivo = this.pesquisaAvancaSaidaAbtmForm.get('motivo')?.value ?? '';
    //this.saidaAbtm.observacoes = this.pesquisaAvancaSaidaAbtmForm.get('observacoes')?.value ?? '';
  }

  onPageChange(event: any): void
  {
    this.first = event.first;
    this.pageSize = event.rows;

    // Atualiza o estado da tabela a cada mudança de página
   /* const state =
    {
      page: Math.floor(this.first / this.pageSize),
      pageSize: this.pageSize,
      pesquisaAvancadaCheck: this.pesquisaAvancadaCheck,
      formPesquisaAvancadaValues: this.pesquisaAvancaSaidaAbtmForm.value,
      saidasAbtm : this.saidasAbtm
    };
    localStorage.setItem('tableState', JSON.stringify(state));*/
  }



  onRowExpand(event: TableRowExpandEvent) {
    console.log('Expandiu:', event.data);
  }

  onRowCollapse(event: TableRowCollapseEvent) {
    console.log('Colapsou:', event.data);
  }



    /*expandAll() {
        this.expandedRows = this.products.reduce((acc, p) => (acc[p.id] = true) && acc, {});
    }

    collapseAll() {
        this.expandedRows = {};
    }*/

}
