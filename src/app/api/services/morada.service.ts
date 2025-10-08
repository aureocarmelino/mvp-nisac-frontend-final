import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { MoradaResponse } from '../models/httpResponse/MoradaResponse';
import { Observable } from 'rxjs';
import { Morada } from '../models/entity/Morada';
import { CreateMoradaDto } from '../models/dto/CreateMoradaDto';

@Injectable({
  providedIn: 'root'
})
export class MoradaService
{

  url = environment.baseUrl;
  constructor(private http: HttpClient){}


  create(newMorada : CreateMoradaDto): Observable<CreateMoradaDto>
  {
    return this.http.post<CreateMoradaDto>(this.url + "/api/nisac/morada", newMorada);
  }

  findAllPagination(page: number, size: number): Observable<MoradaResponse>
  {
    return this.http.get<MoradaResponse>( this.url + `/api/nisac/morada/pagination?page=${page}&size=${size}&status=true`);
  }

  findAll(): Observable<Morada[]>
  {
    return this.http.get<Morada[]>( this.url + `/api/nisac/morada/ativos/true`);
  }

  findById(id : string) : Observable<Morada>
  {
    return this.http.get<Morada>( this.url + `/api/nisac/morada/${id}`);
  }

}
