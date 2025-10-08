import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { GrupoNaturezaOcorrencia } from '../models/entity/GrupoNaturezaOcorrencia';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GrupoNaturezaOcorrenciaService
{
  url = environment.baseUrl;
  constructor(private http: HttpClient){}


  /*create(newFreguesia : CreateGru): Observable<CreateFreguesiaDto>
  {
    return this.http.post<CreateFreguesiaDto>(this.url + "/api/nisac/freguesia", newFreguesia);
  }

  findAllPagination(page: number, size: number): Observable<FreguesiaResponse>
  {
    return this.http.get<FreguesiaResponse>( this.url + `/api/nisac/freguesia/pagination?page=${page}&size=${size}&status=true`);
  }*/

  findAll(): Observable<GrupoNaturezaOcorrencia[]>
  {
    return this.http.get<GrupoNaturezaOcorrencia[]>( this.url + `/api/nisac/grupo/natureza/ocorrencia/ativos/true`);
  }

  findById(id : string) : Observable<GrupoNaturezaOcorrencia>
  {
    return this.http.get<GrupoNaturezaOcorrencia>( this.url + `/api/nisac/grupo/natureza/ocorrencia/${id}`);
  }
}
