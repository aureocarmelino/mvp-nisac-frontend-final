import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { BreadcrumbComponent } from '../../../../components/breadcrumb/breadcrumb.component';
import { NgStyle } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list-opcoes-tele-assistencia',
  imports: [BreadcrumbComponent, NgStyle, RouterLink],
  templateUrl: './list-opcoes-tele-assistencia.component.html',
  styleUrl: './list-opcoes-tele-assistencia.component.scss'
})
export class ListOpcoesTeleAssistenciaComponent implements OnInit
{

  items: MenuItem[] | undefined;

  ngOnInit()
  {
    this.items =
    [
        { label: "Dashboard", routerLink: '/'},
        { label: 'Ocorrências', routerLink: '/ocorrencias' },
        { label: 'Tele Assistência', id: "current" }
    ];
  }

}
