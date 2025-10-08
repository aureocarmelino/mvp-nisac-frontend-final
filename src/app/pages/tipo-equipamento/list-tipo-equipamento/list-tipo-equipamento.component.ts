import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SpinnerComponent } from '../../../components/loader/spinner/spinner.component';
import { BreadcrumbComponent } from '../../../components/breadcrumb/breadcrumb.component';
import { TableLazyLoadEvent, TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { TipoEquipamento } from '../../../api/models/entity/TipoEquipamento';
import { MenuItem } from 'primeng/api';
import { TipoEquipamentoService } from '../../../api/services/tipo-equipamento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-tipo-equipamento',
 imports: [SpinnerComponent,
        BreadcrumbComponent,
        TableModule,
        CommonModule,
        ToastModule,
        ButtonModule],
  templateUrl: './list-tipo-equipamento.component.html',
  styleUrl: './list-tipo-equipamento.component.scss'
})
export class ListTipoEquipamentoComponent implements OnInit
{

  list: TipoEquipamento[] = [];
  total: number = 0;
  loading: boolean = true;
  items: MenuItem[] | undefined;

  @ViewChild('filter') filter!: ElementRef;

  constructor(public tipoEquipamentoService : TipoEquipamentoService, public router : Router) { }

  ngOnInit(): void
  {
    this.items =
    [
      { label: "Dashboard", routerLink: '/'},
      { label: 'Registo de Tipo de Equipamento', routerLink: '/tipo-equipamento/registo'},
      { label: 'Listagem de Tipo de Equipamento', id: "current" }
    ];
  }


  loadList($event: TableLazyLoadEvent)
  {
     this.loading = true;

    if ($event && $event.first !== undefined && $event.rows !== undefined && $event.rows !== null)
    {
      const page = $event.first / $event.rows;
      const size = $event.rows;

      this.tipoEquipamentoService.findAllTipoEquipamentoPagination(page, size).subscribe((res) => {
         this.loading = false;
         this.list = res.content;
         this.total = res.totalElements;
        }
      )
    }

  }

  goToDetail(itemId: number): void
  {
    this.router.navigate([`/tipo-equipamento/detalhe/${itemId}`]);
  }

}
