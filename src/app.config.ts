import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter, withEnabledBlockingInitialNavigation, withInMemoryScrolling } from '@angular/router';
import Aura from '@primeng/themes/aura';
import { providePrimeNG } from 'primeng/config';
import { appRoutes } from './app.routes';
import { APP_BASE_HREF } from '@angular/common';
import { NgxSpinnerModule } from 'ngx-spinner';
import { JwtModule } from '@auth0/angular-jwt';
import { ToastrModule } from 'ngx-toastr';
import { ToastModule } from 'primeng/toast';
import { nisacInterceptorFn } from './app/interceptor/nisacInterceptorInterceptor';
import { provideAnimations } from '@angular/platform-browser/animations';


// ao usar npm install @auth0/angular-jwt
export function tokenGetter(): string
{
  return localStorage.getItem('token')!;
}

export const appConfig: ApplicationConfig = {

    providers:
    [
        providePrimeNG({ theme: { preset: Aura } }),

        provideRouter(appRoutes, withInMemoryScrolling({ anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled' }), withEnabledBlockingInitialNavigation()),

        provideHttpClient(
            withFetch(),
            withInterceptors([nisacInterceptorFn])
        ),

        //provideAnimationsAsync(),
        provideAnimations(),


        providePrimeNG({ theme: { preset: Aura, options: { darkModeSelector: '.app-dark' } } }),

        // { provide: APP_BASE_HREF, useValue: '/nisac-app' }, // ✅ Define "/app" como base padrão,
        importProvidersFrom(NgxSpinnerModule.forRoot(/*config*/)),




        // ao usar npm install @auth0/angular-jwt
        importProvidersFrom(

            ToastrModule.forRoot(
            {
                timeOut: 9000,
                positionClass: 'toast-top-right',
                preventDuplicates: true,
            }
            ),
            ToastModule,

            NgxSpinnerModule.forRoot(),

            JwtModule.forRoot({
              config:
              {
                tokenGetter: tokenGetter,
                allowedDomains: ['localhost:4200'],
                disallowedRoutes: ['http://localhost:4200/api/auth']
              }
            })
          )
    ]
};
