import { Injectable } from '@angular/core';
import { TipoOcorrencia } from '../models/entity/TipoOcorrencia';
import { Observable } from 'rxjs';
import { TipoOcorrenciaResponse } from '../models/httpResponse/TipoOcorrenciaResponse';
import { CreateTipoOcorrenciaDto } from '../models/dto/CreateTipoOcorrenciaDto';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class TipoDeOcorrenciaService
{

  url = environment.baseUrl;

  constructor(private http: HttpClient){}


  create(newTipoOcorrencia : CreateTipoOcorrenciaDto): Observable<CreateTipoOcorrenciaDto>
  {
    return this.http.post<CreateTipoOcorrenciaDto>(this.url + "/api/nisac/tipo/ocorrencia", newTipoOcorrencia);
  }

  findAllTipoOcorrenciaPagination(page: number, size: number): Observable<TipoOcorrenciaResponse>
  {
    return this.http.get<TipoOcorrenciaResponse>( this.url + `/api/nisac/tipo/ocorrencia/pagination?page=${page}&size=${size}&status=true`);
  }

  findAllTipoOcorrencia(): Observable<TipoOcorrencia[]>
  {
    return this.http.get<TipoOcorrencia[]>( this.url + `/api/nisac/tipo/ocorrencia`);
  }

  findById(id : string) : Observable<TipoOcorrencia>
  {
    return this.http.get<TipoOcorrencia>( this.url + `/api/nisac/tipo/ocorrencia/${id}`);
  }
}
