import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { CreateUserNisacDto } from '../models/dto/CreateUserNisacDto';
import { UserNisac } from '../models/entity/UserNisac';
import { UserNisacResponse } from '../models/httpResponse/UserNisacResponse';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { UserNisacUpdatePassworDto } from '../models/dto/UserNisacUpdatePassworDto';

@Injectable({
  providedIn: 'root'
})
export class UtilizadorService
{

  url = environment.baseUrl;

  constructor(private http: HttpClient, private auth : AuthService){}


  create(newUserNisac : CreateUserNisacDto): Observable<UserNisac>
  {
    return this.http.post<UserNisac>(this.url + "/api/utilizador/signup", newUserNisac);
  }

  update(newUserNisac : CreateUserNisacDto, idUser : number): Observable<UserNisac>
  {
    console.log("CHAMOU A API")
    return this.http.put<UserNisac>(this.url + `/api/utilizador/update/${idUser}`, newUserNisac);
  }

  updatePassowrd(userNisacUpdatePassworDto : UserNisacUpdatePassworDto): Observable<UserNisac>
  {
    return this.http.put<UserNisac>(this.url + "/api/utilizador/update-password", userNisacUpdatePassworDto);
  }

  findAllUtilizadorPagination(page: number, size: number): Observable<UserNisacResponse>
  {
    return this.http.get<UserNisacResponse>( this.url + `/api/utilizador/pagination?page=${page}&size=${size}&status=true`);
  }

  findById(id : string) : Observable<UserNisac>
  {
    return this.http.get<UserNisac>( this.url + `/api/utilizador/${id}`);
  }
}
