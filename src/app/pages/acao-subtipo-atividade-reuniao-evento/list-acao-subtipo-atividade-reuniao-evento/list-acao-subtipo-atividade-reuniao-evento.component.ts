import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AcaoSubTipoAtividadeReuniaoEvento } from '../../../api/models/entity/AcaoSubTipoAtividadeReuniaoEvento';
import { AcaoSubtipoAtividadeReuniaoEventoService } from '../../../api/services/acao-subtipo-atividade-reuniao-evento.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { TableLazyLoadEvent, TableModule } from 'primeng/table';
import { SpinnerComponent } from '../../../components/loader/spinner/spinner.component';
import { BreadcrumbComponent } from '../../../components/breadcrumb/breadcrumb.component';
import { CommonModule } from '@angular/common';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-list-acao-subtipo-atividade-reuniao-evento',
   imports: [SpinnerComponent,
         BreadcrumbComponent,
         TableModule,
         CommonModule,
         ToastModule,
         ButtonModule],
  templateUrl: './list-acao-subtipo-atividade-reuniao-evento.component.html',
  styleUrl: './list-acao-subtipo-atividade-reuniao-evento.component.scss'
})
export class ListAcaoSubtipoAtividadeReuniaoEventoComponent implements OnInit
{

  items: MenuItem[] | undefined;
  list: AcaoSubTipoAtividadeReuniaoEvento[] = [];
  total: number = 0;
  loading: boolean = true;

  @ViewChild('filter') filter!: ElementRef;

  constructor(public acaoSubtipoAtividadeReuniaoEventoService : AcaoSubtipoAtividadeReuniaoEventoService,
    private router: Router,
    private toastr: ToastrService, private spinner: NgxSpinnerService) { }


  ngOnInit(): void
  {

    this.items =
      [
        { label: "Dashboard", routerLink: '/'},
        { label: 'Registo de Ação Subtipo Atividade, Reunião e Evento', routerLink: '/acao-subtipo-atividade-reuniao-evento/registo'  },
        { label: 'Listagem de Ação Subtipo Atividade, Reunião e Evento', id: "current" },
      ];
  }


  loadList($event: TableLazyLoadEvent)
  {
    this.loading = true;
    if ($event && $event.first !== undefined && $event.rows !== undefined && $event.rows !== null)
    {
      const page = $event.first / $event.rows;
      const size = $event.rows;

      this.acaoSubtipoAtividadeReuniaoEventoService.findAllPagination(page, size).subscribe((res) => {
         this.loading = false;
         this.list = res.content;
         this.total = res.totalElements;
        }
      )
    }
  }

  goToDetail(itemId: number): void
  {
    this.router.navigate([`/acao-subtipo-atividade-reuniao-evento/detalhe/${itemId}`]);
  }

}
