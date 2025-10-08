import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { BreadcrumbComponent } from '../../../../components/breadcrumb/breadcrumb.component';
import { NgStyle } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list-opcoes-apoio-social',
  imports: [BreadcrumbComponent, NgStyle, RouterLink],
  templateUrl: './list-opcoes-apoio-social.component.html',
  styleUrl: './list-opcoes-apoio-social.component.scss'
})
export class ListOpcoesApoioSocialComponent  implements OnInit
{
  items: MenuItem[] | undefined;

  ngOnInit()
  {
    this.items =
    [
        { label: "Dashboard", routerLink: '/'},
        { label: 'Ocorrências', routerLink: '/ocorrencias' },
        { label: 'Apoio Social', id: "current" }
    ];
  }

}

