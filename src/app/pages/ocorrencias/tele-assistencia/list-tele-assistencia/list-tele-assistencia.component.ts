import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { TableLazyLoadEvent, TableModule } from 'primeng/table';
import { TeleAssistenciaService } from '../../../../api/services/tele-assistencia.service';
import { MenuItem } from 'primeng/api';
import { TeleAssistencia } from '../../../../api/models/entity/TeleAssistencia';
import { BreadcrumbComponent } from '../../../../components/breadcrumb/breadcrumb.component';
import { CommonModule } from '@angular/common';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-list-tele-assistencia',
  imports: [ BreadcrumbComponent, TableModule, CommonModule, ToastModule, ButtonModule],
  templateUrl: './list-tele-assistencia.component.html',
  styleUrl: './list-tele-assistencia.component.scss'
})
export class ListTeleAssistenciaComponent implements OnInit
{
  items: MenuItem[] | undefined;
  teleAssistenciaList: TeleAssistencia[] = [];
  total: number = 0;
  loading: boolean = true;

  @ViewChild('filter') filter!: ElementRef;

  constructor( public router : Router, public teleAssistenciaService : TeleAssistenciaService,
  private toastr: ToastrService, private spinner: NgxSpinnerService) { }

  ngOnInit()
  {
    this.items =
    [
      { label: "Dashboard", routerLink: '/'},
      { label: 'Ocorrências', routerLink: '/ocorrencias' },
      { label: 'Tele Assistência', routerLink: '/ocorrencia/tele-assistencia' },
      { label: 'Listagem', id: "current" }

    ];
  }


  loadTeleAssistencia($event: TableLazyLoadEvent)
  {
    this.loading = true;

    if ($event && $event.first !== undefined && $event.rows !== undefined && $event.rows !== null)
    {
      const page = $event.first / $event.rows;
      const size = $event.rows;

      this.teleAssistenciaService.findAllPagination(page, size).subscribe((res) => {
         this.loading = false;
         this.teleAssistenciaList = res.content;
         console.log(this.teleAssistenciaList)
         this.total = res.totalElements;
        }
      )
    }
  }

  goToDetail(itemId: number): void
  {
    this.router.navigate([`/ocorrencia/tele-assistencia/detalhe/${itemId}`]);
  }

}
