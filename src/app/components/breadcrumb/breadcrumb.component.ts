import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { NgClass } from '@angular/common';


@Component({
  selector: 'app-breadcrumb',
  imports: [BreadcrumbModule, RouterLink, NgClass],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.scss'
})
export class BreadcrumbComponent
{
    @Input() items?: MenuItem[] = [];
}
