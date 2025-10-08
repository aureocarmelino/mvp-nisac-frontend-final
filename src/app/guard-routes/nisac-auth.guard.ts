import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../api/services/auth.service';
import { inject } from '@angular/core';

export const nisacAuthGuard: CanActivateFn = (route, state) => {

  const auth  = inject(AuthService);
  const router  = inject(Router);

  if (auth.isAccessTokenInvalid())
  {
      return auth.getNewAccessToken().then(() =>
      {
        if (auth.isAccessTokenInvalid())
        {
          if (state.url !== '/login')
          {
            router.navigate(['/login']);
            return false;
          }

        }
        return true;
      }).catch(() => {
        // Se ocorrer erro ao tentar atualizar o token, redirecionar para login
        router.navigate(['/login']);
        return false;
      });
  }
  /*else if (state.url === '/login')
  {
    router.navigate(['/']);
    return false;
  }*/
  else if (!auth.isAccessTokenInvalid() && state.url === '/login')
  {
        // Se já estiver autenticado e tentar ir ao login, redireciona para o dashboard
        router.navigate(['/']);
        return false;
    }
  return true;

};
