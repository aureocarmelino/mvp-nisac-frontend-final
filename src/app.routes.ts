import { provideRouter, Routes, withRouterConfig } from '@angular/router';
import { AppLayout } from './app/layout/component/app.layout';
import { Dashboard } from './app/pages/dashboard/dashboard';
import { Documentation } from './app/pages/documentation/documentation';
import { Landing } from './app/pages/landing/landing';
import { Notfound } from './app/pages/notfound/notfound';
import { ViewGrupoOcorrenciaComponent } from './app/components/view-grupo-ocorrencia/view-grupo-ocorrencia.component';
import { CreateApoioSocialComponent } from './app/pages/ocorrencias/apoio-social/create-apoio-social/create-apoio-social.component';
import { ListApoioSocialComponent } from './app/pages/ocorrencias/apoio-social/list-apoio-social/list-apoio-social.component';
import { ListOpcoesApoioSocialComponent } from './app/pages/ocorrencias/apoio-social/list-opcoes-apoio-social/list-opcoes-apoio-social.component';
import { CreateUtilizadorComponent } from './app/pages/utilizador/create-utilizador/create-utilizador.component';
import { ListUtilizadorComponent } from './app/pages/utilizador/list-utilizador/list-utilizador.component';
import { DetailUtilizadorComponent } from './app/pages/utilizador/detail-utilizador/detail-utilizador.component';
import { CreateFreguesiaComponent } from './app/pages/freguesia/create-freguesia/create-freguesia.component';
import { ListFreguesiaComponent } from './app/pages/freguesia/list-freguesia/list-freguesia.component';
import { DetailFreguesiaComponent } from './app/pages/freguesia/detail-freguesia/detail-freguesia.component';
import { CreateMoradaComponent } from './app/pages/morada/create-morada/create-morada.component';
import { ListMoradaComponent } from './app/pages/morada/list-morada/list-morada.component';
import { DetailMoradaComponent } from './app/pages/morada/detail-morada/detail-morada.component';
import { CreateTipoNaturezaComponent } from './app/pages/tipo-natureza/create-tipo-natureza/create-tipo-natureza.component';
import { ListTipoNaturezaComponent } from './app/pages/tipo-natureza/list-tipo-natureza/list-tipo-natureza.component';
import { DetailTipoNaturezaComponent } from './app/pages/tipo-natureza/detail-tipo-natureza/detail-tipo-natureza.component';
import { CreateTipoEquipamentoComponent } from './app/pages/tipo-equipamento/create-tipo-equipamento/create-tipo-equipamento.component';
import { ListTipoEquipamentoComponent } from './app/pages/tipo-equipamento/list-tipo-equipamento/list-tipo-equipamento.component';
import { DetailTipoEquipamentoComponent } from './app/pages/tipo-equipamento/detail-tipo-equipamento/detail-tipo-equipamento.component';
import { CreateTrabalhoEfetuadoComponent } from './app/pages/trabalho-efetuado/create-trabalho-efetuado/create-trabalho-efetuado.component';
import { ListTrabalhoEfetuadoComponent } from './app/pages/trabalho-efetuado/list-trabalho-efetuado/list-trabalho-efetuado.component';
import { DetailTrabalhoEfetuadoComponent } from './app/pages/trabalho-efetuado/detail-trabalho-efetuado/detail-trabalho-efetuado.component';
import { CreateTipoAtividadeReuniaoEventoComponent } from './app/pages/tipo-atividade-reuniao-evento/create-tipo-atividade-reuniao-evento/create-tipo-atividade-reuniao-evento.component';
import { ListTipoAtividadeReuniaoEventoComponent } from './app/pages/tipo-atividade-reuniao-evento/list-tipo-atividade-reuniao-evento/list-tipo-atividade-reuniao-evento.component';
import { DetailTipoAtividadeReuniaoEventoComponent } from './app/pages/tipo-atividade-reuniao-evento/detail-tipo-atividade-reuniao-evento/detail-tipo-atividade-reuniao-evento.component';
import { CreateAcaoSubtipoAtividadeReuniaoEventoComponent } from './app/pages/acao-subtipo-atividade-reuniao-evento/create-acao-subtipo-atividade-reuniao-evento/create-acao-subtipo-atividade-reuniao-evento.component';
import { ListAcaoSubtipoAtividadeReuniaoEventoComponent } from './app/pages/acao-subtipo-atividade-reuniao-evento/list-acao-subtipo-atividade-reuniao-evento/list-acao-subtipo-atividade-reuniao-evento.component';
import { DetailAcaoSubtipoAtividadeReuniaoEventoComponent } from './app/pages/acao-subtipo-atividade-reuniao-evento/detail-acao-subtipo-atividade-reuniao-evento/detail-acao-subtipo-atividade-reuniao-evento.component';
import { CreateAtividadeComplementarComponent } from './app/pages/atividade-complementar/create-atividade-complementar/create-atividade-complementar.component';
import { ListAtividadeComplementarComponent } from './app/pages/atividade-complementar/list-atividade-complementar/list-atividade-complementar.component';
import { DetailAtividadeComplementarComponent } from './app/pages/atividade-complementar/detail-atividade-complementar/detail-atividade-complementar.component';
import { LoginComponent } from './app/pages/login/login/login.component';
import { nisacAuthGuard } from './app/guard-routes/nisac-auth.guard';
import { CreateAtividadeReuniaoEventoComponent } from './app/pages/ocorrencias/atividade-reuniao-evento/create-atividade-reuniao-evento/create-atividade-reuniao-evento.component';
import { ListAtividadeReuniaoEventoComponent } from './app/pages/ocorrencias/atividade-reuniao-evento/list-atividade-reuniao-evento/list-atividade-reuniao-evento.component';
import { DetailAtividadeReuniaoEventoComponent } from './app/pages/ocorrencias/atividade-reuniao-evento/detail-atividade-reuniao-evento/detail-atividade-reuniao-evento.component';
import { ListOpcoesAtividadeReuniaoEventoComponent } from './app/pages/ocorrencias/atividade-reuniao-evento/list-opcoes-atividade-reuniao-evento/list-opcoes-atividade-reuniao-evento.component';
import { ListOpcoesTeleAssistenciaComponent } from './app/pages/ocorrencias/tele-assistencia/list-opcoes-tele-assistencia/list-opcoes-tele-assistencia.component';
import { CreateTeleAssistenciaComponent } from './app/pages/ocorrencias/tele-assistencia/create-tele-assistencia/create-tele-assistencia.component';
import { ListTeleAssistenciaComponent } from './app/pages/ocorrencias/tele-assistencia/list-tele-assistencia/list-tele-assistencia.component';
import { DetailTeleAssistenciaComponent } from './app/pages/ocorrencias/tele-assistencia/detail-tele-assistencia/detail-tele-assistencia.component';
import { DashboardComponent } from './app/dashboard/dashboard.component';
import { PersonalPageComponent } from './app/pages/user/personal-page/personal-page.component';
import { DetailApoioSocialComponent } from './app/pages/ocorrencias/apoio-social/detail-apoio-social/detail-apoio-social.component';
import { ViewOpcoesEstatisticaComponent } from './app/pages/consultas/view-opcoes-estatistica/view-opcoes-estatistica.component';
import { EstatisticaDdsComponent } from './app/pages/consultas/estatistica-dds/estatistica-dds.component';
import { EstatisticaRsblComponent } from './app/pages/consultas/estatistica-rsbl/estatistica-rsbl.component';


export const appRoutes: Routes =
[
    {
        path: '',
        title: 'Página Inicial',
        component: AppLayout,
        canActivate: [nisacAuthGuard],
        children: [
            { path: '', component: DashboardComponent },
            { path: 'uikit', loadChildren: () => import('./app/pages/uikit/uikit.routes') },
            { path: 'documentation', component: Documentation },
            { path: 'pages', loadChildren: () => import('./app/pages/pages.routes') },

            {
                title: "Ocorrências",
                path: 'ocorrencias',
                component: ViewGrupoOcorrenciaComponent,
                canActivate: [nisacAuthGuard]
            },

            {
                title: "Estatística",
                path: 'estatistica',
                component: ViewOpcoesEstatisticaComponent,
                canActivate: [nisacAuthGuard]
            },

            {
                title: "DDS - Estatística",
                path: 'estatistica/dds',
                component: EstatisticaDdsComponent,
                canActivate: [nisacAuthGuard]
            },

            {
                title: "RSBL - Estatística",
                path: 'estatistica/rsbl',
                component: EstatisticaRsblComponent,
                canActivate: [nisacAuthGuard]
            },

            /*            USER PROFILE - PERSONAL PAGE      */
            {
                title: "Perfil",
                path: 'utilizador/perfil',
                component: PersonalPageComponent,
                canActivate: [nisacAuthGuard]
            },

            /*                APOIO SOCIAL          */
            {
                title: "Apoio Social",
                path: 'ocorrencia/apoio-social',
                component:ListOpcoesApoioSocialComponent,
                canActivate: [nisacAuthGuard]
            },
            {
                title: "Registo de apoio social",
                path: 'ocorrencia/apoio-social/registo',
                component: CreateApoioSocialComponent,
                canActivate: [nisacAuthGuard]
            },
            {
                title: "Listagem de apoios socias",
                path: 'ocorrencia/apoio-social/listagem',
                component: ListApoioSocialComponent,
                canActivate: [nisacAuthGuard]
            },
            {
                title: "Detalhe - Apoio Social", path: 'ocorrencia/apoio-social/detalhe/:id',
                component: DetailApoioSocialComponent, canActivate: [nisacAuthGuard]
            },

            /*           ATIVIDADES, REUNIÕES & EVENTOS      */
            {
                title: "Atividades, Reuniões e Eventos",
                path: 'ocorrencia/atividades-reunioes-eventos',
                component: ListOpcoesAtividadeReuniaoEventoComponent,
                canActivate: [nisacAuthGuard]
            },
            {
                title: "Registo de Atividades, Reuniões e Eventos",
                path: 'ocorrencia/atividades-reunioes-eventos/registo',
                component: CreateAtividadeReuniaoEventoComponent,
                canActivate: [nisacAuthGuard]
            },
            {
                title: "Listagem de Atividades, Reuniões e Eventos",
                path: 'ocorrencia/atividades-reunioes-eventos/listagem',
                component: ListAtividadeReuniaoEventoComponent,
                canActivate: [nisacAuthGuard]
            },
            {
                title: "Detalhe - Atividades, Reuniões e Eventos",
                path: 'ocorrencia/atividades-reunioes-eventos/detalhe/:id',
                component: DetailAtividadeReuniaoEventoComponent,
                canActivate: [nisacAuthGuard]
            },

              /*               TELE ASSISTÊNCIA         */
            {
                title: "Tele Assistência",
                path: 'ocorrencia/tele-assistencia',
                component: ListOpcoesTeleAssistenciaComponent,
                canActivate: [nisacAuthGuard]
            },
            {
                title: "Registo de tele assistência",
                path: 'ocorrencia/tele-assistencia/registo',
                component: CreateTeleAssistenciaComponent,
                canActivate: [nisacAuthGuard]
            },
            {
                title: "Listagem de tele assistência",
                path: 'ocorrencia/tele-assistencia/listagem',
                component: ListTeleAssistenciaComponent,
                canActivate: [nisacAuthGuard]
            },
            {
                title: "Detalhe - Tele Assistência", path: 'ocorrencia/tele-assistencia/detalhe/:id',
                component: DetailTeleAssistenciaComponent,
                canActivate: [nisacAuthGuard]
            },



             /*         UTILIZADORES      */
            {
                title: "Registo de utilizador",
                path: 'utilizador/registo',
                component: CreateUtilizadorComponent,
                canActivate: [nisacAuthGuard]
            },
            {
                title: "Listagem de utilizadores",
                path: 'utilizador/listagem',
                component: ListUtilizadorComponent,
                canActivate: [nisacAuthGuard]
            },
            {
                title: "Detalhe de utilizador",
                path: 'utilizador/detalhe/:id',
                component: DetailUtilizadorComponent,
                canActivate: [nisacAuthGuard]
            },

             /*            FREGUESIA      */
            {
                title: "Registo de freguesia",
                path: 'freguesia/registo',
                component: CreateFreguesiaComponent,
                canActivate: [nisacAuthGuard]
            },
            {
                title: "Listagem de freguesia",
                path: 'freguesia/listagem',
                component: ListFreguesiaComponent,
                canActivate: [nisacAuthGuard]
            },
            {
                title: "Detalhe - Freguesia", path: 'freguesia/detalhe/:id',
                component: DetailFreguesiaComponent,
                canActivate: [nisacAuthGuard]
            },

            /*            MORADA      */
            {
                title: "Registo de morada",
                path: 'morada/registo',
                component: CreateMoradaComponent,
                canActivate: [nisacAuthGuard]
            },
            {
                title: "Listagem de morada",
                path: 'morada/listagem',
                component: ListMoradaComponent,
                canActivate: [nisacAuthGuard]
            },
            {
                title: "Detalhe - Morada", path: 'morada/detalhe/:id',
                component: DetailMoradaComponent,
                canActivate: [nisacAuthGuard]
            },

            /*            TIPO NATUREZA OCORRÊNCIA      */
            {
                title: "Registo de Tipo Natureza Ocorrência",
                path: 'tipo-natureza-ocorrencia/registo',
                component: CreateTipoNaturezaComponent,
                canActivate: [nisacAuthGuard]
            },
            {
                title: "Listagem de Tipo Natureza Oorrências",
                path: 'tipo-natureza-ocorrencia/listagem',
                component: ListTipoNaturezaComponent,
                canActivate: [nisacAuthGuard]
            },
            {
                title: "Detalhe - Tipo Natureza Ocorrência", path: 'tipo-natureza-ocorrencia/detalhe/:id',
                component: DetailTipoNaturezaComponent,
                canActivate: [nisacAuthGuard]
            },

                /*            TIPO DE EQUIPAMENTO      */
            {
                title: "Registo de tipo de equipamento",
                path: 'tipo-equipamento/registo',
                component: CreateTipoEquipamentoComponent,
                canActivate: [nisacAuthGuard]
            },
            {
                title: "Listagem de tipo de equipamentos",
                path: 'tipo-equipamento/listagem',
                component: ListTipoEquipamentoComponent,
                canActivate: [nisacAuthGuard]
            },
            {
                title: "Detalhe - Tipo de Equipamento", path: 'tipo-equipamento/detalhe/:id',
                component: DetailTipoEquipamentoComponent,
                canActivate: [nisacAuthGuard]
            },

             /*            TRABALHO EFETUADO      */
            {
                title: "Registo de trabalho efetuado",
                path: 'trabalho-efetuado/registo',
                component: CreateTrabalhoEfetuadoComponent,
                canActivate: [nisacAuthGuard]
            },
            {
                title: "Listagem de trabalhos efetuados",
                path: 'trabalho-efetuado/listagem',
                component: ListTrabalhoEfetuadoComponent,
                canActivate: [nisacAuthGuard]
            },
            {
                title: "Detalhe - Trabalho Efectuado", path: 'trabalho-efetuado/detalhe/:id',
                component: DetailTrabalhoEfetuadoComponent,
                canActivate: [nisacAuthGuard]
            },

              /*            TIPO DE ATIVIDADE, REUNIÃO E EVENTO      */
            {
                title: "Registo de tipo de Atividade Reuniao e Evento",
                path: 'tipo-atividade-reuniao-evento/registo',
                component: CreateTipoAtividadeReuniaoEventoComponent,
                canActivate: [nisacAuthGuard]
            },
            {
                title: "Listagem de tipo de Atividade Reuniao e Evento",
                path: 'tipo-atividade-reuniao-evento/listagem',
                component: ListTipoAtividadeReuniaoEventoComponent,
                canActivate: [nisacAuthGuard]
            },
            {
                title: "Detalhe - Tipo de Atividade Reuniao e Evento", path: 'tipo-atividade-reuniao-evento/detalhe/:id',
                component: DetailTipoAtividadeReuniaoEventoComponent,
                canActivate: [nisacAuthGuard]
            },


             /*            AÇÃO SUBTIPO DE ATIVIDADE, REUNIÃO E EVENTO      */
            {
                title: "Registo de Ação Subtipo Atividade, Reunião e Evento",
                path: 'acao-subtipo-atividade-reuniao-evento/registo',
                component: CreateAcaoSubtipoAtividadeReuniaoEventoComponent,
                canActivate: [nisacAuthGuard]
            },
            {
                title: "Listagem de Ação Subtipo Atividade, Reunião e Evento",
                path: 'acao-subtipo-atividade-reuniao-evento/listagem',
                component: ListAcaoSubtipoAtividadeReuniaoEventoComponent,
                canActivate: [nisacAuthGuard]
            },
            {
                title: "Detalhe - Tipo de Atividade Reuniao e Evento",
                path: 'acao-subtipo-atividade-reuniao-evento/detalhe/:id',
                component: DetailAcaoSubtipoAtividadeReuniaoEventoComponent,
                canActivate: [nisacAuthGuard]
            },


             /*            ATIVIDADE COMPLEMENTAR      */
             {
                title: "Registo de Atividade Complementar",
                path: 'atividade-complementar/registo',
                component: CreateAtividadeComplementarComponent,
                canActivate: [nisacAuthGuard]
            },
            {
                title: "Listagem de Atividade Complementar",
                path: 'atividade-complementar/listagem',
                component: ListAtividadeComplementarComponent,
                canActivate: [nisacAuthGuard]
            },
            {
                title: "Detalhe - Atividade Complementar",
                path: 'atividade-complementar/detalhe/:id',
                component: DetailAtividadeComplementarComponent,
                canActivate: [nisacAuthGuard]
            },

        ]
    },
   // { path: 'landing', component: Landing },
   // { path: 'notfound', component: Notfound },
   // { path: 'auth', loadChildren: () => import('./app/pages/auth/auth.routes') },
    {
        path: 'login',
        title: "Login",
        component: LoginComponent,
        canActivate: [nisacAuthGuard]
    },
    {
        path: '**',
        redirectTo: ''
    }

];

// Configuração global do Router
export const appRouter = provideRouter(
    [
      { path: 'nisac-app', children: appRoutes } // ✅ Prefixo "/app" antes de todas as rotas
    ],
    withRouterConfig({ paramsInheritanceStrategy: 'always' })
  );
