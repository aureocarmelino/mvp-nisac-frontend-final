import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TipoAtividadeReuniaoEvento } from '../../../api/models/entity/TipoAtividadeReuniaoEvento';
import { MenuItem } from 'primeng/api';
import { TipoAtividadeReuniaoEventoService } from '../../../api/services/tipo-atividade-reuniao-evento.service';
import { Router } from '@angular/router';
import { TableLazyLoadEvent, TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from '../../../components/breadcrumb/breadcrumb.component';
import { SpinnerComponent } from '../../../components/loader/spinner/spinner.component';

@Component({
  selector: 'app-list-tipo-atividade-reuniao-evento',
 imports: [SpinnerComponent,
        BreadcrumbComponent,
        TableModule,
        CommonModule,
        ToastModule,
        ButtonModule],
  templateUrl: './list-tipo-atividade-reuniao-evento.component.html',
  styleUrl: './list-tipo-atividade-reuniao-evento.component.scss'
})
export class ListTipoAtividadeReuniaoEventoComponent implements OnInit
{

  list: TipoAtividadeReuniaoEvento[] = [];
  total: number = 0;
  loading: boolean = true;
  items: MenuItem[] | undefined;

  @ViewChild('filter') filter!: ElementRef;

  constructor(public tipoAtividadeReuniaoEventoService : TipoAtividadeReuniaoEventoService, public router : Router) { }

  ngOnInit(): void
  {
    this.items =
    [
      { label: "Dashboard", routerLink: '/'},
      { label: 'Registo de Tipo Atividade Reuniao e Evento', routerLink: '/tipo-atividade-reuniao-evento/registo'},
      { label: 'Listagem de Tipo Atividade Reuniao e Evento', id: "current" }
    ];
  }


  loadList($event: TableLazyLoadEvent)
  {
     this.loading = true;

    if ($event && $event.first !== undefined && $event.rows !== undefined && $event.rows !== null)
    {
      const page = $event.first / $event.rows;
      const size = $event.rows;

      this.tipoAtividadeReuniaoEventoService.findAllPagination(page, size).subscribe((res) => {
         this.loading = false;
         this.list = res.content;
         this.total = res.totalElements;
        }
      )
    }

  }

  goToDetail(itemId: number): void
  {
    this.router.navigate([`/tipo-atividade-reuniao-evento/detalhe/${itemId}`]);
  }

}
