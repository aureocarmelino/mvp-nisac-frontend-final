import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { GrupoNaturezaOcorrenciaCard } from '../../api/models/GrupoNaturezaOcorrenciaCard';
import { RouterLink } from '@angular/router';
import { ToolbarModule } from 'primeng/toolbar';
import { BreadcrumbComponent } from '../breadcrumb/breadcrumb.component';


@Component({
  selector: 'app-view-grupo-ocorrencia',
  imports: [RouterLink, ToolbarModule, BreadcrumbComponent],
  templateUrl: './view-grupo-ocorrencia.component.html',
  styleUrl: './view-grupo-ocorrencia.component.scss'
})
export class ViewGrupoOcorrenciaComponent implements OnInit
{

  items: MenuItem[] | undefined;

  grupoNaturezaOcorrencias: GrupoNaturezaOcorrenciaCard[] =
  [
    {
      nomeCardOcorrencia: "apoio-social-card",
      tileCard: "Apoio Social",
      iconCard: "bi bi-person-arms-up",
      linkCard: '/ocorrencia/apoio-social'
    },
    {
      nomeCardOcorrencia: "teleassistencia-card",
      tileCard: "Tele Assistência",
      iconCard: "bi bi-box2-heart",
      linkCard: "/ocorrencia/tele-assistencia"
    },
    {
      nomeCardOcorrencia: "saidas-com-abtm-card",
      tileCard: "Atividades, Reuniões ...",
      iconCard: "bi bi-bus-front",
      linkCard: "/ocorrencia/atividades-reunioes-eventos"
    }

    /*
    {
      nomeCardOcorrencia: "saidas-com-abtm-card",
      tileCard: "Saída com ABTM",
      iconCard: "bi bi-bus-front",
      linkCard: "/ocorrencia/saida-com-abtm"
    }
    */

  ]

  ngOnInit()
  {
    this.items =
    [
        { label: "Dashboard", routerLink: '/'},
        { label: 'Ocorrências', id: "current" }
    ];
  }

}
