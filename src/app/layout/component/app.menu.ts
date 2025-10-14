import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AppMenuitem } from './app.menuitem';
import { AuthService } from '../../api/services/auth.service';

@Component({
    selector: 'app-menu',
    standalone: true,
    imports: [CommonModule, AppMenuitem, RouterModule],
    template: `<ul class="layout-menu">
        <ng-container *ngFor="let item of model; let i = index">
            <li app-menuitem *ngIf="!item.separator" [item]="item" [index]="i" [root]="true"></li>
            <li *ngIf="item.separator" class="menu-separator"></li>
        </ng-container>
    </ul> `
})
export class AppMenu {

    model: MenuItem[] = [];
    user: any;

    constructor(public auth : AuthService){}

    ngOnInit() {

        const isAdmin = this.auth.jwtPayload?.logged?.authority === 'ADMIN';

        this.model = [
            {
                label: 'Home',
                items: [{ label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/'] }]
            },
            /*{
                label:  'Operações',
                items:
                [
                  {
                    label: 'Ocorrências',
                    icon: 'pi pi-fw pi-id-card',
                    routerLink: 'ocorrencias'
                  },
                ]
            },
            {
                label:  'Consultas',
                items:
                [
                  {
                    label: 'Estatística',
                    icon: 'pi pi-fw pi-id-card',
                    routerLink: 'estatistica'
                  },
                ]
            },*/
            {
                label: 'Gestão',
                items: [
                  {
                    label: 'Utilizador',
                    icon: 'pi pi-fw pi-user',
                    items:
                    [
                      ...(isAdmin
                        ? [
                            {
                            label: 'Registo',
                            icon: 'pi pi-fw pi-user-plus',
                            routerLink: 'utilizador/registo',
                            },
                        ]
                        : []),
                      {
                        label: 'Listagem',
                        icon: 'pi pi-fw pi-users',
                        routerLink: 'utilizador/listagem'
                      },
                    ]
                  },
                  /*{
                    label: 'Trabalho efetuado', icon: 'pi pi-fw pi-briefcase',
                    items: [
                      {
                        label: 'Registo', icon: 'pi pi-fw pi-plus-circle', routerLink: ['/trabalho-efetuado/registo']
                      },
                      {
                        label: 'Listagem', icon: 'pi pi-fw pi-list', routerLink: ['/trabalho-efetuado/listagem']
                      },
                    ]
                  },

                  {
                    label: 'Tipo equipamento', icon: 'pi pi-fw pi-wrench',
                    items: [
                      {
                        label: 'Registo', icon: 'pi pi-fw pi-plus-circle', routerLink: ['/tipo-equipamento/registo']
                      },
                      {
                        label: 'Listagem', icon: 'pi pi-fw pi-list', routerLink: ['/tipo-equipamento/listagem']
                      },
                    ]
                  },

                  {
                    label: 'Tipo atividade, reunião e evento', icon: 'pi pi-fw pi-bookmark',
                    items: [
                      {
                        label: 'Registo', icon: 'pi pi-fw pi-plus-circle', routerLink: ['/tipo-atividade-reuniao-evento/registo']
                      },
                      {
                        label: 'Listagem', icon: 'pi pi-fw pi-list', routerLink: ['/tipo-atividade-reuniao-evento/listagem']
                      },
                    ]
                  },

                  {
                    label: 'Ação subtipo atividade, reunião e evento', icon: 'pi pi-fw pi-bookmark',
                    items: [
                      {
                        label: 'Registo', icon: 'pi pi-fw pi-bookmark', routerLink: ['/acao-subtipo-atividade-reuniao-evento/registo']
                      },
                      {
                        label: 'Listagem', icon: 'pi pi-fw pi-bookmark', routerLink: ['/acao-subtipo-atividade-reuniao-evento/listagem']
                      },
                    ]
                  },

                  {
                    label: 'Atividade Complementar', icon: 'pi pi-fw pi-bookmark',
                    items: [
                      {
                        label: 'Registo', icon: 'pi pi-fw pi-plus-circle', routerLink: ['/atividade-complementar/registo']
                      },
                      {
                        label: 'Listagem', icon: 'pi pi-fw pi-list', routerLink: ['/atividade-complementar/listagem']
                      },
                    ]
                  },

                  {
                    label: 'Tipo natureza', icon: 'pi pi-fw pi-objects-column',
                    items: [
                      {
                        label: 'Registo', icon: 'pi pi-fw pi-plus-circle', routerLink: ['/tipo-natureza-ocorrencia/registo']
                      },
                      {
                        label: 'Listagem', icon: 'pi pi-fw pi-list', routerLink: ['/tipo-natureza-ocorrencia/listagem']
                      },
                    ]
                  },

                  {
                    label: 'Freguesia', icon: 'pi pi-fw pi-home',
                    items: [
                      {
                        label: 'Registo', icon: 'pi pi-fw pi-plus-circle', routerLink: ['/freguesia/registo']
                      },
                      {
                        label: 'Listagem', icon: 'pi pi-fw pi-list', routerLink: ['/freguesia/listagem']
                      },
                    ]
                  },

                  {
                    label: 'Morada', icon: 'pi pi-fw pi-home',
                    items: [
                      {
                        label: 'Registo', icon: 'pi pi-fw pi-plus-circle', routerLink: ['/morada/registo']
                      },
                      {
                        label: 'Listagem', icon: 'pi pi-fw pi-list', routerLink: ['/morada/listagem']
                      },
                    ]
                  },*/
                ]
              },
         /*   {
                label: 'UI Components',
                items: [
                    { label: 'Form Layout', icon: 'pi pi-fw pi-id-card', routerLink: ['/uikit/formlayout'] },
                    { label: 'Input', icon: 'pi pi-fw pi-check-square', routerLink: ['/uikit/input'] },
                    { label: 'Button', icon: 'pi pi-fw pi-mobile', class: 'rotated-icon', routerLink: ['/uikit/button'] },
                    { label: 'Table', icon: 'pi pi-fw pi-table', routerLink: ['/uikit/table'] },
                    { label: 'List', icon: 'pi pi-fw pi-list', routerLink: ['/uikit/list'] },
                    { label: 'Tree', icon: 'pi pi-fw pi-share-alt', routerLink: ['/uikit/tree'] },
                    { label: 'Panel', icon: 'pi pi-fw pi-tablet', routerLink: ['/uikit/panel'] },
                    { label: 'Overlay', icon: 'pi pi-fw pi-clone', routerLink: ['/uikit/overlay'] },
                    { label: 'Media', icon: 'pi pi-fw pi-image', routerLink: ['/uikit/media'] },
                    { label: 'Menu', icon: 'pi pi-fw pi-bars', routerLink: ['/uikit/menu'] },
                    { label: 'Message', icon: 'pi pi-fw pi-comment', routerLink: ['/uikit/message'] },
                    { label: 'File', icon: 'pi pi-fw pi-file', routerLink: ['/uikit/file'] },
                    { label: 'Chart', icon: 'pi pi-fw pi-chart-bar', routerLink: ['/uikit/charts'] },
                    { label: 'Timeline', icon: 'pi pi-fw pi-calendar', routerLink: ['/uikit/timeline'] },
                    { label: 'Misc', icon: 'pi pi-fw pi-circle', routerLink: ['/uikit/misc'] }
                ]
            },
            {
                label: 'Pages',
                icon: 'pi pi-fw pi-briefcase',
                routerLink: ['/pages'],
                items: [
                    {
                        label: 'Landing',
                        icon: 'pi pi-fw pi-globe',
                        routerLink: ['/landing']
                    },
                    {
                        label: 'Auth',
                        icon: 'pi pi-fw pi-user',
                        items: [
                            {
                                label: 'Login',
                                icon: 'pi pi-fw pi-sign-in',
                                routerLink: ['/auth/login']
                            },
                            {
                                label: 'Error',
                                icon: 'pi pi-fw pi-times-circle',
                                routerLink: ['/auth/error']
                            },
                            {
                                label: 'Access Denied',
                                icon: 'pi pi-fw pi-lock',
                                routerLink: ['/auth/access']
                            }
                        ]
                    },
                    {
                        label: 'Crud',
                        icon: 'pi pi-fw pi-pencil',
                        routerLink: ['/pages/crud']
                    },
                    {
                        label: 'Not Found',
                        icon: 'pi pi-fw pi-exclamation-circle',
                        routerLink: ['/pages/notfound']
                    },
                    {
                        label: 'Empty',
                        icon: 'pi pi-fw pi-circle-off',
                        routerLink: ['/pages/empty']
                    }
                ]
            },
            {
                label: 'Hierarchy',
                items: [
                    {
                        label: 'Submenu 1',
                        icon: 'pi pi-fw pi-bookmark',
                        items: [
                            {
                                label: 'Submenu 1.1',
                                icon: 'pi pi-fw pi-bookmark',
                                items: [
                                    { label: 'Submenu 1.1.1', icon: 'pi pi-fw pi-bookmark' },
                                    { label: 'Submenu 1.1.2', icon: 'pi pi-fw pi-bookmark' },
                                    { label: 'Submenu 1.1.3', icon: 'pi pi-fw pi-bookmark' }
                                ]
                            },
                            {
                                label: 'Submenu 1.2',
                                icon: 'pi pi-fw pi-bookmark',
                                items: [{ label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-bookmark' }]
                            }
                        ]
                    },
                    {
                        label: 'Submenu 2',
                        icon: 'pi pi-fw pi-bookmark',
                        items: [
                            {
                                label: 'Submenu 2.1',
                                icon: 'pi pi-fw pi-bookmark',
                                items: [
                                    { label: 'Submenu 2.1.1', icon: 'pi pi-fw pi-bookmark' },
                                    { label: 'Submenu 2.1.2', icon: 'pi pi-fw pi-bookmark' }
                                ]
                            },
                            {
                                label: 'Submenu 2.2',
                                icon: 'pi pi-fw pi-bookmark',
                                items: [{ label: 'Submenu 2.2.1', icon: 'pi pi-fw pi-bookmark' }]
                            }
                        ]
                    }
                ]
            },
            {
                label: 'Get Started',
                items: [
                    {
                        label: 'Documentation',
                        icon: 'pi pi-fw pi-book',
                        routerLink: ['/documentation']
                    },
                    {
                        label: 'View Source',
                        icon: 'pi pi-fw pi-github',
                        url: 'https://github.com/primefaces/sakai-ng',
                        target: '_blank'
                    }
                ]
            }

           */
        ];
    }
}
