import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { TableLazyLoadEvent, TableModule } from 'primeng/table';
import { Morada } from '../../../api/models/entity/Morada';
import { MoradaService } from '../../../api/services/morada.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { SpinnerComponent } from '../../../components/loader/spinner/spinner.component';
import { BreadcrumbComponent } from '../../../components/breadcrumb/breadcrumb.component';
import { ToastModule } from 'primeng/toast';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-list-morada',
  imports: [SpinnerComponent,
        BreadcrumbComponent,
        TableModule,
        CommonModule,
        ToastModule,
        ButtonModule],
  templateUrl: './list-morada.component.html',
  styleUrl: './list-morada.component.scss'
})
export class ListMoradaComponent implements OnInit
{
  items: MenuItem[] | undefined;
  list: Morada[] = [];
  total: number = 0;
  loading: boolean = true;

  @ViewChild('filter') filter!: ElementRef;

  constructor(public moradaService : MoradaService,
    private router: Router,
    private toastr: ToastrService, private spinner: NgxSpinnerService) { }


  ngOnInit(): void
  {
    this.items =
    [
      { label: "Dashboard", routerLink: '/'},
      { label: 'Registo de Morada', routerLink: '/morada/registo'},
      { label: 'Listagem de Morada', id: "current" }
    ];
  }


  loadList($event: TableLazyLoadEvent)
  {
    this.loading = true;
    if ($event && $event.first !== undefined && $event.rows !== undefined && $event.rows !== null)
    {
      const page = $event.first / $event.rows;
      const size = $event.rows;

      this.moradaService.findAllPagination(page, size).subscribe((res) => {
         this.loading = false;
         this.list = res.content;
         this.total = res.totalElements;
        }
      )
    }
  }

  goToDetail(itemId: number): void
  {
    this.router.navigate([`/morada/detalhe/${itemId}`]);
  }

}
