import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateTrabalhoEfetuadoDto } from '../models/dto/CreateTrabalhoEfetuadoDto';
import { environment } from '../../../environments/environment.development';
import { Observable } from 'rxjs';
import { TrabalhoEfetuado } from '../models/entity/TrabalhoEfetuado';
import { TrabalhoEfetuadoResponse } from '../models/httpResponse/TrabalhoEfetuadoResponse';

@Injectable({
    providedIn: 'root'
})
export class TrabalhoEfetuadoService {
    url = environment.baseUrl;

    constructor(private http: HttpClient) { }


    create(newTrabalhoEfetuado: CreateTrabalhoEfetuadoDto): Observable<CreateTrabalhoEfetuadoDto> {
        return this.http.post<CreateTrabalhoEfetuadoDto>(this.url + "/api/nisac/trabalho/efectuado", newTrabalhoEfetuado);
    }

    findAllTrabalhoEfetuadoPagination(page: number, size: number): Observable<TrabalhoEfetuadoResponse> {
        return this.http.get<TrabalhoEfetuadoResponse>(this.url + `/api/nisac/trabalho/efectuado/pagination?page=${page}&size=${size}&status=true`);
    }

    findAllTrabalhoEfetuado(): Observable<TrabalhoEfetuado[]> {
        return this.http.get<TrabalhoEfetuado[]>(this.url + `/api/nisac/trabalho/efectuado/ativos/true`);
    }

    findById(id: string): Observable<TrabalhoEfetuado> {
        return this.http.get<TrabalhoEfetuado>(this.url + `/api/nisac/trabalho/efectuado/${id}`);
    }

    changeStatus(id: number, status: boolean): Observable<TrabalhoEfetuado> {
        return this.http.put<TrabalhoEfetuado>(this.url + "/api/nisac/trabalho/efectuado/" + id + "/" + status, {});
    }

    update(id: number, trabalhoEfetuado: CreateTrabalhoEfetuadoDto): Observable<TrabalhoEfetuado> {
        return this.http.put<TrabalhoEfetuado>(this.url + "/api/nisac/trabalho/efectuado/update/" + id, trabalhoEfetuado);
    }
}
