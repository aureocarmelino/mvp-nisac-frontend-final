import { Component, ElementRef, ViewChild } from '@angular/core';
import { BreadcrumbComponent } from '../../../components/breadcrumb/breadcrumb.component';
import { SpinnerComponent } from '../../../components/loader/spinner/spinner.component';
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';
import { UserNisac } from '../../../api/models/entity/UserNisac';
import { UtilizadorService } from '../../../api/services/utilizador.service';
import { Router } from '@angular/router';
import { AuthService } from '../../../api/services/auth.service';
import { Table, TableLazyLoadEvent, TableModule } from 'primeng/table';
import { CustomerService} from '../../service/customer.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../service/product.service';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-list-utilizador',
  imports: [
    SpinnerComponent,
    BreadcrumbComponent,
    TableModule,
    CommonModule,
    FormsModule,
    ToastModule,
    ButtonModule,
  ],
  templateUrl: './list-utilizador.component.html',
  styleUrl: './list-utilizador.component.scss',
  providers: []
})
export class ListUtilizadorComponent
{
    items: MenuItem[] | undefined;
    usersNisac: UserNisac[] = [];
    totalUsersNisac: number = 0;
    loading: boolean = true;
    @ViewChild('filter') filter!: ElementRef;

    constructor(public utilizadorService : UtilizadorService, public router : Router, public auth: AuthService) { }


    ngOnInit(): void
    {
        this.items =
        [
            { label: "Dashboard", routerLink: '/'},
            { label: 'Registo de Utilizador', routerLink: '/utilizador/registo'},
            { label: 'Listagem de Utilizadores', id: "current" }
        ];
    }

    loadUsernisac($event: TableLazyLoadEvent)
    {
        this.loading = true;

        if ($event && $event.first !== undefined && $event.rows !== undefined && $event.rows !== null)
        {
            const page = $event.first / $event.rows;
            const size = $event.rows;

            this.utilizadorService.findAllUtilizadorPagination(page, size).subscribe((res) => {
                this.loading = false;
                this.usersNisac = res.content;
                this.totalUsersNisac = res.totalElements;
                }
            );
        }
    }

    filtrarDadosRenderizadosTable(table: Table, event: Event)
    {
        table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
    }

    limparTableUsersNisac(table: Table)
    {
        table.clear();
        this.filter.nativeElement.value = '';
    }

    goToDetail(itemId: number): void
    {
        this.router.navigate([`/utilizador/detalhe/${itemId}`]);
    }


 /*
    clear(table: Table)
    {
        table.clear();
        this.filter.nativeElement.value = '';
    }

   onGlobalFilter(table: Table, event: Event)
    {
        console.log(table)
        table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
    }
 */

}
