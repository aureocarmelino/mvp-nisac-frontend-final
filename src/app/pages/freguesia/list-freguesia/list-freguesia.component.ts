import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TableLazyLoadEvent, TableModule } from 'primeng/table';
import { FreguesiaService } from '../../../api/services/freguesia.service';
import { Router } from '@angular/router';
import { Freguesia } from '../../../api/models/entity/Freguesia';
import { MenuItem } from 'primeng/api';
import { BreadcrumbComponent } from '../../../components/breadcrumb/breadcrumb.component';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from '../../../components/loader/spinner/spinner.component';

@Component({
  selector: 'app-list-freguesia',
  imports: [
      SpinnerComponent,
      BreadcrumbComponent,
      TableModule,
      CommonModule,
      ToastModule,
      ButtonModule],
  templateUrl: './list-freguesia.component.html',
  styleUrl: './list-freguesia.component.scss'
})
export class ListFreguesiaComponent implements OnInit
{
  list: Freguesia[] = [];
  total: number = 0;
  loading: boolean = true;
  items: MenuItem[] | undefined;

  @ViewChild('filter') filter!: ElementRef;

  constructor(public freguesiaService : FreguesiaService, public router : Router) { }

  ngOnInit(): void
  {
    this.items =
    [
      { label: "Dashboard", routerLink: '/'},
      { label: 'Registo de Freguesia', routerLink: '/freguesia/registo'},
      { label: 'Listagem de Freguesia', id: "current" }
    ];
  }


  loadList($event: TableLazyLoadEvent)
  {
     this.loading = true;

    if ($event && $event.first !== undefined && $event.rows !== undefined && $event.rows !== null)
    {
      const page = $event.first / $event.rows;
      const size = $event.rows;

      this.freguesiaService.findAllPagination(page, size).subscribe((res) => {
         this.loading = false;
         this.list = res.content;
         this.total = res.totalElements;
        }
      )
    }
  }

  goToDetail(itemId: number): void
  {
    this.router.navigate([`/freguesia/detalhe/${itemId}`]);
  }

}
