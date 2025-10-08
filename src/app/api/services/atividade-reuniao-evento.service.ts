import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { AtividadeReuniaoEvento } from '../models/entity/AtividadeReuniaoEvento';
import { Observable } from 'rxjs';
import { AtividadeReuniaoEventoResponse } from '../models/httpResponse/AtividadeReuniaoEventoResponse';
import { CreateAtividadeReuniaoEventoDto } from '../models/dto/CreateAtividadeReuniaoEventoDto';

@Injectable({
  providedIn: 'root'
})
export class AtividadeReuniaoEventoService
{
  url = environment.baseUrl;

    constructor(private http: HttpClient){}


    create(newAtividade : CreateAtividadeReuniaoEventoDto): Observable<CreateAtividadeReuniaoEventoDto>
    {
      return this.http.post<CreateAtividadeReuniaoEventoDto>(this.url + "/api/nisac/atividade/reuniao/evento", newAtividade);
    }

    findAllPagination(page: number, size: number): Observable<AtividadeReuniaoEventoResponse>
    {
      return this.http.get<AtividadeReuniaoEventoResponse>( this.url + `/api/nisac/atividade/reuniao/evento/pagination?page=${page}&size=${size}&status=true`);
    }

    findAllTipoOcorrencia(): Observable<AtividadeReuniaoEvento[]>
    {
      return this.http.get<AtividadeReuniaoEvento[]>( this.url + `/api/nisac/atividade/reuniao/evento`);
    }

    findById(id : string) : Observable<AtividadeReuniaoEvento>
    {
      return this.http.get<AtividadeReuniaoEvento>( this.url + `/api/nisac/atividade/reuniao/evento/${id}`);
    }
}

