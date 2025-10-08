import { Component, OnInit } from '@angular/core';
import { BreadcrumbComponent } from '../../../components/breadcrumb/breadcrumb.component';
import { NgStyle } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-view-opcoes-estatistica',
  imports: [BreadcrumbComponent, NgStyle, RouterLink],
  templateUrl: './view-opcoes-estatistica.component.html',
  styleUrl: './view-opcoes-estatistica.component.scss'
})
export class ViewOpcoesEstatisticaComponent implements OnInit
{
  items: MenuItem[] | undefined;

  ngOnInit()
  {
    this.items =
    [
        { label: "Dashboard", routerLink: '/'},
        { label: 'Estatistica', id: "current" }
    ];
  }

}
