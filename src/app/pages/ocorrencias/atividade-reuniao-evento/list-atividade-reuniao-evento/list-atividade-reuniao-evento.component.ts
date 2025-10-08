import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TableLazyLoadEvent, TableModule } from 'primeng/table';
import { AtividadeReuniaoEvento } from '../../../../api/models/entity/AtividadeReuniaoEvento';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AtividadeReuniaoEventoService } from '../../../../api/services/atividade-reuniao-evento.service';
import { BreadcrumbComponent } from '../../../../components/breadcrumb/breadcrumb.component';
import { CommonModule } from '@angular/common';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-list-atividade-reuniao-evento',
  imports: [ BreadcrumbComponent, TableModule, CommonModule, ToastModule, ButtonModule],
  templateUrl: './list-atividade-reuniao-evento.component.html',
  styleUrl: './list-atividade-reuniao-evento.component.scss'
})
export class ListAtividadeReuniaoEventoComponent implements OnInit
{

  items: MenuItem[] | undefined;
  atividadeReuniaoEventoList: AtividadeReuniaoEvento[] = [];
  total: number = 0;
  loading: boolean = true;

  @ViewChild('filter') filter!: ElementRef;

  constructor( public router : Router, public atividadeReuniaoEventoService : AtividadeReuniaoEventoService,
  private toastr: ToastrService, private spinner: NgxSpinnerService) { }

  ngOnInit()
  {
    this.items =
    [
      { label: "Dashboard", routerLink: '/'},
      { label: 'Ocorrências', routerLink: '/ocorrencias' },
      { label: 'Atividades, Reuniões e Eventos', routerLink: '/ocorrencia/atividades-reunioes-eventos' },
      { label: 'Listagem', id: "current" }

    ];
  }


  loadAtividadeReuniaoEvento($event: TableLazyLoadEvent)
  {
    this.loading = true;

    if ($event && $event.first !== undefined && $event.rows !== undefined && $event.rows !== null)
    {
      const page = $event.first / $event.rows;
      const size = $event.rows;

      this.atividadeReuniaoEventoService.findAllPagination(page, size).subscribe((res) => {
         this.loading = false;
         this.atividadeReuniaoEventoList = res.content;
         this.total = res.totalElements;
        }
      )
    }
  }

  goToDetail(itemId: number): void
  {
    this.router.navigate([`/ocorrencia/atividades-reunioes-eventos/detalhe/${itemId}`]);
  }

}
