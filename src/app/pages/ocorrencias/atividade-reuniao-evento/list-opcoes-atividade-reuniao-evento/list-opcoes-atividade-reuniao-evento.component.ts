import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { BreadcrumbComponent } from '../../../../components/breadcrumb/breadcrumb.component';
import { NgStyle } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list-opcoes-atividade-reuniao-evento',
  imports: [BreadcrumbComponent, NgStyle, RouterLink],
  templateUrl: './list-opcoes-atividade-reuniao-evento.component.html',
  styleUrl: './list-opcoes-atividade-reuniao-evento.component.scss'
})
export class ListOpcoesAtividadeReuniaoEventoComponent implements OnInit
{
  items: MenuItem[] | undefined;

  ngOnInit()
  {
    this.items = [
        { label: "Dashboard", routerLink: '/'},
        { label: 'Ocorrências', routerLink: '/ocorrencias' },
        { label: 'Atividades, Reuniões e Eventos', id: "current" }];
  }
}
