import { inject, Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { Observable, from, throwError } from 'rxjs';
import { mergeMap, catchError } from 'rxjs/operators';
import { AuthService } from '../api/services/auth.service';

export class NotAuthenticatedError {}

/*@Injectable()
export class nisacInterceptorInterceptor implements HttpInterceptor {

  constructor(private auth: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Permitir requisição de signup sem autenticação
    if (req.url.includes('/api/auth/signup')) {
      return next.handle(req);
    }

    // Permitir requisições para logout sem bloqueio
    if (this.auth.isLoggingOut) {
      console.warn('Ignorando renovação de token durante logout.');
      return next.handle(req);
    }

    // Verificar se o token é inválido e a renovação é necessária
    if (!req.url.includes('/oauth/token') && this.auth.isAccessTokenInvalid()) {
      console.log("Gerando novo token");

      // Não renova o token durante o logout
      if (this.auth.isLoggingOut) {
        console.warn("Bloqueando renovação de token durante logout.");
        return throwError(() => new NotAuthenticatedError());
      }

      // Renovar token
      return from(this.auth.getNewAccessToken()).pipe(
        mergeMap(() => {
          if (this.auth.isAccessTokenInvalid()) {
            throw new NotAuthenticatedError();
          }

          // Clonar a requisição com o novo token
          req = req.clone({
            setHeaders: {
              Authorization: `Bearer ${localStorage.getItem('token')}`
            }
          });
          return next.handle(req);
        }),
        catchError((error) => {
          console.error("Erro ao renovar o token:", error);
          return throwError(() => error);
        })
      );
    }

    // Adicionar token à requisição se necessário
    if (!req.url.includes('/oauth/token')) {
      const token = localStorage.getItem('token');
      if (token) {
        req = req.clone({
          setHeaders: {
            Authorization: `Bearer ${token}`
          }
        });
      }
    }

    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        // Lidar com erros de autenticação
        if (error.status === 401) {
          console.warn("Erro 401 - Não autenticado.");
          if (!this.auth.isLoggingOut) {
            this.auth.clearAccessToken();
          }
        }
        return throwError(() => error);
      })
    );
  }
}
*/

export const nisacInterceptorFn: HttpInterceptorFn = (req, next) =>
{
    const auth = inject(AuthService);

    // Permitir requisição de signup
    if (req.url.includes('/api/auth/signup')) {
      return next(req);
    }

    // Ignorar se estiver fazendo logout
    if (auth.isLoggingOut) {
      console.warn('Ignorando renovação de token durante logout.');
      return next(req);
    }

    // Verificar necessidade de renovar token
    if (!req.url.includes('/oauth/token') && auth.isAccessTokenInvalid()) {
      console.log("Gerando novo token");

      if (auth.isLoggingOut) {
        console.warn("Bloqueando renovação de token durante logout.");
        return throwError(() => new NotAuthenticatedError());
      }

      return from(auth.getNewAccessToken()).pipe(
        mergeMap(() => {
          if (auth.isAccessTokenInvalid()) {
            return throwError(() => new NotAuthenticatedError());
          }

          const updatedReq = req.clone({
            setHeaders: {
              Authorization: `Bearer ${localStorage.getItem('token')}`
            }
          });

          return next(updatedReq);
        }),
        catchError(error => {
          console.error("Erro ao renovar o token:", error);
          return throwError(() => error);
        })
      );
    }

    // Adicionar token se necessário
    if (!req.url.includes('/oauth/token')) {
      const token = localStorage.getItem('token');
      if (token) {
        req = req.clone({
          setHeaders: {
            Authorization: `Bearer ${token}`
          }
        });
      }
    }

    return next(req).pipe(
      catchError((error) => {
        if (error.status === 401 && !auth.isLoggingOut) {
          console.warn("Erro 401 - Não autenticado.");
          auth.clearAccessToken();
        }
        return throwError(() => error);
      })
    );
};
