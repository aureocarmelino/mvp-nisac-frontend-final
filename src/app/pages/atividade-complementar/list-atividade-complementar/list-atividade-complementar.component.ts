import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AtividadeComplementar } from '../../../api/models/entity/AtividadeComplementar';
import { MenuItem } from 'primeng/api';
import { AtividadeComplementarService } from '../../../api/services/atividade-complementar.service';
import { Router } from '@angular/router';
import { TableLazyLoadEvent, TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from '../../../components/breadcrumb/breadcrumb.component';
import { SpinnerComponent } from '../../../components/loader/spinner/spinner.component';

@Component({
  selector: 'app-list-atividade-complementar',
  imports: [
    SpinnerComponent,
    BreadcrumbComponent,
    TableModule,
    CommonModule,
    ToastModule,
    ButtonModule],
  templateUrl: './list-atividade-complementar.component.html',
  styleUrl: './list-atividade-complementar.component.scss'
})
export class ListAtividadeComplementarComponent implements OnInit
{
  list: AtividadeComplementar[] = [];
  total: number = 0;
  loading: boolean = true;
  items: MenuItem[] | undefined;

  @ViewChild('filter') filter!: ElementRef;

  constructor(public atividadeComplementarService : AtividadeComplementarService, public router : Router) { }

  ngOnInit(): void
  {
    this.items =
    [
      { label: "Dashboard", routerLink: '/'},
      { label: 'Registo de Atividade Complementar', routerLink: '/atividade-complementar/registo'},
      { label: 'Listagem de Atividade Complementar', id: "current" }
    ];
  }


  loadList($event: TableLazyLoadEvent)
  {
     this.loading = true;

    if ($event && $event.first !== undefined && $event.rows !== undefined && $event.rows !== null)
    {
      const page = $event.first / $event.rows;
      const size = $event.rows;

      this.atividadeComplementarService.findAllPagination(page, size).subscribe((res) => {
         this.loading = false;
         this.list = res.content;
         this.total = res.totalElements;
        }
      )
    }
  }

  goToDetail(itemId: number): void
  {
    this.router.navigate([`/atividade-complementar/detalhe/${itemId}`]);
  }

}
