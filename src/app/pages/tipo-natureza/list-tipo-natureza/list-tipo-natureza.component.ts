import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { TipoNaturezaOcorrencia } from '../../../api/models/entity/TipoNaturezaOcorrencia';
import { TipoNaturezaOcorrenciaService } from '../../../api/services/tipo-natureza-ocorrencia.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
import { TableLazyLoadEvent, TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from '../../../components/breadcrumb/breadcrumb.component';
import { SpinnerComponent } from '../../../components/loader/spinner/spinner.component';

@Component({
  selector: 'app-list-tipo-natureza',
    imports: [SpinnerComponent,
          BreadcrumbComponent,
          TableModule,
          CommonModule,
          ToastModule,
          ButtonModule],
  templateUrl: './list-tipo-natureza.component.html',
  styleUrl: './list-tipo-natureza.component.scss'
})
export class ListTipoNaturezaComponent implements OnInit
{
  items: MenuItem[] | undefined;
  list: TipoNaturezaOcorrencia[] = [];
  total: number = 0;
  loading: boolean = true;

  @ViewChild('filter') filter!: ElementRef;

  constructor(public tipoNaturezaOcorrenciaService : TipoNaturezaOcorrenciaService,
    private router: Router,
    private toastr: ToastrService, private spinner: NgxSpinnerService) { }


  ngOnInit(): void
  {
    this.items =
    [
      { label: "Dashboard", routerLink: '/'},
      { label: 'Registo de Tipo Natureza', routerLink: '/tipo-natureza-ocorrencia/registo'},
      { label: 'Listagem de Tipo Natureza', id: "current" }
    ];
  }


  loadList($event: TableLazyLoadEvent)
  {
    this.loading = true;
    if ($event && $event.first !== undefined && $event.rows !== undefined && $event.rows !== null)
    {
      const page = $event.first / $event.rows;
      const size = $event.rows;

      this.tipoNaturezaOcorrenciaService.findAllPagination(page, size).subscribe((res) => {
         this.loading = false;
         this.list = res.content;
         this.total = res.totalElements;
        }
      )
    }
  }

  goToDetail(itemId: number): void
  {
    this.router.navigate([`/tipo-natureza-ocorrencia/detalhe/${itemId}`]);
  }

}
