import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { AcaoSubTipoAtividadeReuniaoEvento } from '../models/entity/AcaoSubTipoAtividadeReuniaoEvento';
import { Observable } from 'rxjs';
import { CreateAcaoSubtipoAtividadeReuniaoEventoDto } from '../models/dto/CreateAcaoSubtipoAtividadeReuniaoEventoDto';
import { AcaoSubTipoAtividadeReuniaoEventoResponse } from '../models/httpResponse/AcaoSubTipoAtividadeReuniaoEventoResponse';

@Injectable({
    providedIn: 'root'
})
export class AcaoSubtipoAtividadeReuniaoEventoService {
    url = environment.baseUrl;

    constructor(private http: HttpClient) { }


    create(newAcao: CreateAcaoSubtipoAtividadeReuniaoEventoDto): Observable<CreateAcaoSubtipoAtividadeReuniaoEventoDto> {
        return this.http.post<CreateAcaoSubtipoAtividadeReuniaoEventoDto>(this.url + "/api/nisac/acao/subtipo", newAcao);
    }

    findAllPagination(page: number, size: number): Observable<AcaoSubTipoAtividadeReuniaoEventoResponse> {
        return this.http.get<AcaoSubTipoAtividadeReuniaoEventoResponse>(this.url + `/api/nisac/acao/subtipo/pagination?page=${page}&size=${size}&status=true`);
    }

    /*findAllTipoOcorrencia(): Observable<AtividadeReuniaoEvento[]> {
        return this.http.get<AtividadeReuniaoEvento[]>(this.url + `/api/nisac/atividade/reuniao/evento`);
    }*/

    findById(id: string): Observable<AcaoSubTipoAtividadeReuniaoEvento> {
        return this.http.get<AcaoSubTipoAtividadeReuniaoEvento>(this.url + `/api/nisac/acao/subtipo/${id}`);
    }


    findAllByTipoAtividadeReuniaoEvento(id: string): Observable<AcaoSubTipoAtividadeReuniaoEvento[]> {
        return this.http.get<AcaoSubTipoAtividadeReuniaoEvento[]>(this.url + `/api/nisac/acao/subtipo/${id}`);
    }

    update(id: number, acaoDto: CreateAcaoSubtipoAtividadeReuniaoEventoDto): Observable<AcaoSubTipoAtividadeReuniaoEvento> {
        return this.http.put<AcaoSubTipoAtividadeReuniaoEvento>(this.url + "/api/nisac/acao/subtipo/update/" + id, acaoDto);
    }

    changeStatus(id: number, status: boolean): Observable<AcaoSubTipoAtividadeReuniaoEvento> {
        return this.http.put<AcaoSubTipoAtividadeReuniaoEvento>(this.url + "/api/nisac/acao/subtipo/" + id + "/" + status, {});
    }
}


