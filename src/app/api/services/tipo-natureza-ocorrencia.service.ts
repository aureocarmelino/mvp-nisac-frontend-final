import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { CreateTipoNaturezaOcorrenciaDto } from '../models/dto/CreateTipoNaturezaOcorrenciaDto';
import { Observable } from 'rxjs';
import { NaturezaOcorrenciaResponse } from '../models/httpResponse/NaturezaOcorrenciaResponse';
import { TipoNaturezaOcorrencia } from '../models/entity/TipoNaturezaOcorrencia';

@Injectable({
  providedIn: 'root'
})
export class TipoNaturezaOcorrenciaService
{
  url = environment.baseUrl;

  constructor(private http: HttpClient){}

  create(newNaturezaOcorrencia : CreateTipoNaturezaOcorrenciaDto): Observable<CreateTipoNaturezaOcorrenciaDto>
  {
    return this.http.post<CreateTipoNaturezaOcorrenciaDto>(this.url + "/api/nisac/tipo/natureza/ocorrencia", newNaturezaOcorrencia);
  }

  findAllPagination(page: number, size: number): Observable<NaturezaOcorrenciaResponse>
  {
    return this.http.get<NaturezaOcorrenciaResponse>( this.url + `/api/nisac/tipo/natureza/ocorrencia/pagination?page=${page}&size=${size}&status=true`);
  }

  findById(id : number) : Observable<TipoNaturezaOcorrencia>
  {
    return this.http.get<TipoNaturezaOcorrencia>( this.url + `/api/nisac/tipo/natureza/ocorrencia/${id}`);
  }

  findByGrupoNaturezaId(id : string) : Observable<TipoNaturezaOcorrencia[]>
  {
    return this.http.get<TipoNaturezaOcorrencia[]>( this.url + `/api/nisac/tipo/natureza/ocorrencia/grupo/${id}`);
  }

}
