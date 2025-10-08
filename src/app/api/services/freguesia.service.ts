import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { FreguesiaResponse } from '../models/httpResponse/FreguesiaResponse';
import { Observable } from 'rxjs';
import { Freguesia } from '../models/entity/Freguesia';
import { CreateFreguesiaDto } from '../models/dto/CreateFreguesiaDto';

@Injectable({
  providedIn: 'root'
})
export class FreguesiaService
{

  url = environment.baseUrl;
  constructor(private http: HttpClient){}


  create(newFreguesia : CreateFreguesiaDto): Observable<CreateFreguesiaDto>
  {
    return this.http.post<CreateFreguesiaDto>(this.url + "/api/nisac/freguesia", newFreguesia);
  }

  findAllPagination(page: number, size: number): Observable<FreguesiaResponse>
  {
    return this.http.get<FreguesiaResponse>( this.url + `/api/nisac/freguesia/pagination?page=${page}&size=${size}&status=true`);
  }

  findAll(): Observable<Freguesia[]>
  {
    return this.http.get<Freguesia[]>( this.url + `/api/nisac/freguesia/ativos/true`);
  }

  findById(id : string) : Observable<Freguesia>
  {
    return this.http.get<Freguesia>( this.url + `/api/nisac/freguesia/${id}`);
  }

}
