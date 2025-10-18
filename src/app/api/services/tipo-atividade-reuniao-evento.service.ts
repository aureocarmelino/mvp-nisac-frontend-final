import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { TipoAtividadeReuniaoEvento } from '../models/entity/TipoAtividadeReuniaoEvento';
import { Observable } from 'rxjs';
import { CreateTipoAtividadeDto } from '../models/dto/CreateTipoAtividadeDto';
import { TipoAtividadeReuniaoEventoResponse } from '../models/httpResponse/TipoAtividadeReuniaoEventoResponse';

@Injectable({
    providedIn: 'root'
})
export class TipoAtividadeReuniaoEventoService {
    url = environment.baseUrl;

    constructor(private http: HttpClient) { }

    create(newTipoAtividade: CreateTipoAtividadeDto): Observable<CreateTipoAtividadeDto> {
        return this.http.post<CreateTipoAtividadeDto>(this.url + "/api/nisac/tipo/atividade/reuniao/evento", newTipoAtividade);
    }

    findAllPagination(page: number, size: number): Observable<TipoAtividadeReuniaoEventoResponse> {
        return this.http.get<TipoAtividadeReuniaoEventoResponse>(this.url + `/api/nisac/tipo/atividade/reuniao/evento/pagination?page=${page}&size=${size}&status=true`);
    }

    findById(id: string): Observable<TipoAtividadeReuniaoEvento> {
        return this.http.get<TipoAtividadeReuniaoEvento>(this.url + `/api/nisac/tipo/atividade/reuniao/evento/${id}`);
    }

    findAllTipoAtividadeReuniaoEvento(): Observable<TipoAtividadeReuniaoEvento[]> {
        return this.http.get<TipoAtividadeReuniaoEvento[]>(this.url + `/api/nisac/tipo/atividade/reuniao/evento/ativos/true`);
    }


    update(id: number, tipoAtividadeDto: CreateTipoAtividadeDto): Observable<TipoAtividadeReuniaoEvento> {
        return this.http.put<TipoAtividadeReuniaoEvento>(this.url + "/api/nisac/tipo/atividade/reuniao/evento/update/" + id, tipoAtividadeDto);
    }

    changeStatus(id: number, status: boolean): Observable<TipoAtividadeReuniaoEvento> {
        return this.http.put<TipoAtividadeReuniaoEvento>(this.url + "/api/nisac/tipo/atividade/reuniao/evento/" + id + "/" + status, {});
    }

}

