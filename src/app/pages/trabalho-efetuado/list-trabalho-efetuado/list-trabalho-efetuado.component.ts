import { Component, ElementRef, ViewChild } from '@angular/core';
import { TrabalhoEfetuado } from '../../../api/models/entity/TrabalhoEfetuado';
import { MenuItem } from 'primeng/api';
import { TrabalhoEfetuadoService } from '../../../api/services/trabalho-efetuado.service';
import { Router } from '@angular/router';
import { TableLazyLoadEvent, TableModule } from 'primeng/table';
import { SpinnerComponent } from '../../../components/loader/spinner/spinner.component';
import { BreadcrumbComponent } from '../../../components/breadcrumb/breadcrumb.component';
import { CommonModule } from '@angular/common';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-list-trabalho-efetuado',
   imports: [SpinnerComponent,
          BreadcrumbComponent,
          TableModule,
          CommonModule,
          ToastModule,
          ButtonModule],
  templateUrl: './list-trabalho-efetuado.component.html',
  styleUrl: './list-trabalho-efetuado.component.scss'
})
export class ListTrabalhoEfetuadoComponent
{
    list: TrabalhoEfetuado[] = [];
    total: number = 0;
    loading: boolean = true;
    items: MenuItem[] | undefined;

    @ViewChild('filter') filter!: ElementRef;

    constructor(public trabalhoEfetuadoService : TrabalhoEfetuadoService, public router : Router) { }


    ngOnInit(): void
    {
      this.items =
      [
        { label: "Dashboard", routerLink: '/'},
        { label: 'Registo de Trabalho Efetuado', routerLink: '/trabalho-efetuado/registo'},
        { label: 'Listagem de Trabalho Efetuado', id: "current" }
      ];
    }

    loadList($event: TableLazyLoadEvent)
    {
       this.loading = true;

      if ($event && $event.first !== undefined && $event.rows !== undefined && $event.rows !== null)
      {
        const page = $event.first / $event.rows;
        const size = $event.rows;

        this.trabalhoEfetuadoService.findAllTrabalhoEfetuadoPagination(page, size).subscribe((res) => {
           this.loading = false;
           this.list = res.content;
           this.total = res.totalElements;
          }
        )
      }

     }

     goToDetail(itemId: number): void
     {
       this.router.navigate([`/trabalho-efetuado/detalhe/${itemId}`]);
     }

     /* filtrarDadosRenderizadosTable(table: Table, event: Event)
    {
      table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
    }

    limparTableUsersNisac(table: Table)
    {
      table.clear();
      this.filter.nativeElement.value = '';
    }*/
  }

