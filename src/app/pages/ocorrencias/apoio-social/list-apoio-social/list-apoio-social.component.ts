
import { MenuItem } from 'primeng/api';
import { ApoioSocial } from '../../../../api/models/entity/ApoioSocial';
import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { TableLazyLoadEvent, TableModule } from 'primeng/table';
import { ApoioSocialService } from '../../../../api/services/apoio-social.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
import { BreadcrumbComponent } from '../../../../components/breadcrumb/breadcrumb.component';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-apoio-social',
  imports: [ BreadcrumbComponent, TableModule, CommonModule, ToastModule, ButtonModule],
  templateUrl: './list-apoio-social.component.html',
  styleUrl: './list-apoio-social.component.scss'
})
export class ListApoioSocialComponent implements OnInit
{
  items: MenuItem[] | undefined;
  apoiosSociais: ApoioSocial[] = [];
  total: number = 0;
  loading: boolean = true;

  @ViewChild('filter') filter!: ElementRef;

  constructor(public apoioSocialService : ApoioSocialService,
    private router: Router,
    private toastr: ToastrService, private spinner: NgxSpinnerService) { }

  ngOnInit()
  {
    this.items =
    [
      { label: "Dashboard", routerLink: '/'},
      { label: 'Ocorrências', routerLink: '/ocorrencias' },
      { label: 'Apoio Social', routerLink: '/ocorrencia/apoio-social' },
      { label: 'Listagem', id: "current" }

    ];
  }


  loadApoioSocial($event: TableLazyLoadEvent)
  {
    this.loading = true;

    if ($event && $event.first !== undefined && $event.rows !== undefined && $event.rows !== null)
    {
        const page = $event.first / $event.rows;
        const size = $event.rows;

        this.apoioSocialService.findAllPagination(page, size).subscribe((res) =>
        {
            this.loading = false;
            this.apoiosSociais = res.content;
            console.log(this.apoiosSociais);
            this.total = res.totalElements;
        }
      )
    }
  }

  goToDetail(itemId: string): void
  {
    this.router.navigate([`/ocorrencia/apoio-social/detalhe/${itemId}`]);
  }

}
