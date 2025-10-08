import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { SpinnerComponent } from './app/components/loader/spinner/spinner.component';
import { AuthService } from './app/api/services/auth.service';
import { CommonModule } from '@angular/common';


import { NgxSpinnerService } from 'ngx-spinner';

import { timer, interval, of } from 'rxjs';
import { startWith, switchMap, filter, take } from 'rxjs/operators';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterModule, SpinnerComponent, RouterOutlet, CommonModule],
    template: `
    <app-spinner></app-spinner>
    <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit
{
    //apiReady = false;
    /*  <app-spinner></app-spinner>
    <router-outlet *ngIf="apiReady"></router-outlet>*/

    constructor(private auth: AuthService, private spinner: NgxSpinnerService) {}

    ngOnInit() {

       /* console.log('AppComponent inicializado'); // ✅ deve aparecer no console
        this.spinner.show();

        interval(2000).pipe(
          startWith(0),
          switchMap(() => this.auth.ping()),
          filter(alive => alive),
          take(1)
        ).subscribe(() => {
          this.spinner.hide();
          this.apiReady = true;
          alert("OLÁ");
        });*/
      }

}
