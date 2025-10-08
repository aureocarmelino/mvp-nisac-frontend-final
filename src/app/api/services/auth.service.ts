import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from '../../../environments/environment';
import { Observable, of, throwError } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService
{
  isLoggingOut = false;
  url = environment.baseUrl;
  jwtPayload: any;

  constructor(private http: HttpClient, private jwtHelper: JwtHelperService, private router: Router)
  {
    this.loadToken();
  }



  public login(email: string, password: string) : Observable<any>
  {

    let header = new HttpHeaders()
      .append('Content-Type', 'application/x-www-form-urlencoded')
      .append('Authorization', 'Basic dGVzdGU6dGVzdGU=');

    let body = new HttpParams()
      .append('username', email)
      .append('password', password)
      .append('grant_type', 'password');

    return this.http.post<any>(this.url + "/oauth/token", body, {
      headers: header,
      withCredentials: true
    }).pipe(

      tap(response =>
      {
        this.storeToken(response['access_token']); // Armazena o token
      }),
      catchError(error_response =>
      {
        let errorMessage = 'Erro desconhecido';

        if (error_response.status === 400)
        {
          if (error_response.error.error === 'invalid_grant' && error_response.error.error_description === 'Bad credentials')
          {
            errorMessage = 'Credenciais Inválidas!';
          }
          else if (error_response.error.error === 'invalid_grant' && error_response.error.error_description === 'User is disabled')
          {
            errorMessage = 'Utilizador desativado!';
          }
        }
        else if (error_response.status === 0 && error_response.statusText === 'Unknown Error')
        {
          errorMessage = 'Servidor indisponível, entre em contato com o administrador';
        }

        return throwError(() => new Error(errorMessage));
      })
    );



  }

  async getNewAccessToken(): Promise<void>
  {
    if (this.isLoggingOut)
    {
      console.warn("Ignorando renovação de token durante logout.");
      return Promise.resolve(); // Não tenta renovar o token se está saindo
    }

    var header = new HttpHeaders();
    header = header.append('Content-Type', 'application/x-www-form-urlencoded');
    header = header.append('Authorization', 'Basic dGVzdGU6dGVzdGU=');

    var body = new HttpParams();
    body = body.append('grant_type', 'refresh_token');


    await this.http.post<any>(this.url + "/oauth/token", body,{ headers: header, withCredentials: true}).toPromise()
    .then((response:any) =>
    {

      this.storeToken(response['access_token']);
      return Promise.resolve();

    }).catch(() =>
    {
      return Promise.resolve();
    });
  }

  isAccessTokenInvalid()
  {
    const token = localStorage.getItem('token');


   // alert(this.jwtHelper.getTokenExpirationDate(token?token :""))
    //alert(!token || this.jwtHelper.isTokenExpired(token))

    console.log("IS_INVALID: " + !token || this.jwtHelper.isTokenExpired(token))

    return !token || this.jwtHelper.isTokenExpired(token);
  }


  public storeToken(token: string)
  {

    this.jwtPayload = this.jwtHelper.decodeToken(token);
    //console.log(JSON.stringify(this.jwtPayload))

    localStorage.setItem('token', token);
  }

  public loadToken()
  {

    console.log("LOAD TOKEN")
    const token = localStorage.getItem('token');

    if ( token )
    {
      this.storeToken(token);
    }
  }

  clearAccessToken()
  {
    //alert("limpo")

    console.log("A LIMPAR TOKEN")
    localStorage.removeItem('token');
    this.jwtPayload = null;
    console.log("TOKEN LIMPO")

    //alert(this.jwtPayload);
  }


  async logout(): Promise<void>
  {
    this.isLoggingOut = true; // Ativando a flag de logout
    try
    {
      await this.http
        .delete(this.url + '/tokens/revoke', { withCredentials: true })
        .toPromise();
      console.log('Token revogado.');
    }
    catch (error)
    {
      console.error('Erro ao revogar token:', error);
    }
    finally
    {
      this.clearAccessToken();
      this.isLoggingOut = false; // Desativando a flag após logout
    }
  }

  ping()
  {
    return this.http.get(`${this.url}/ping`).pipe(
      map(() => true),
      catchError(() => of(false))
    );
  }



}
