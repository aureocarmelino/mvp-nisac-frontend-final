import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { CreateAtividadeComplementarDto } from '../models/dto/CreateAtividadeComplementarDto';
import { Observable } from 'rxjs';
import { AtividadeComplementarResponse } from '../models/httpResponse/AtividadeComplementarResponse';
import { AtividadeComplementar } from '../models/entity/AtividadeComplementar';

@Injectable({
  providedIn: 'root'
})
export class AtividadeComplementarService
{
   url = environment.baseUrl;

   constructor(private http: HttpClient){}


   create(newAtividadeComplementar : CreateAtividadeComplementarDto): Observable<CreateAtividadeComplementarDto>
   {
     return this.http.post<CreateAtividadeComplementarDto>(this.url + "/api/nisac/atividade/complementar", newAtividadeComplementar);
   }

   findAllPagination(page: number, size: number): Observable<AtividadeComplementarResponse>
   {
     return this.http.get<AtividadeComplementarResponse>( this.url + `/api/nisac/atividade/complementar/pagination?page=${page}&size=${size}&status=true`);
   }

    findAll(): Observable<AtividadeComplementar[]>
    {
        return this.http.get<AtividadeComplementar[]>( this.url + `/api/nisac/atividade/complementar/ativos/true`);
    }

   findById(id : string) : Observable<AtividadeComplementar>
   {
     return this.http.get<AtividadeComplementar>( this.url + `/api/nisac/atividade/complementar/${id}`);
   }

   update(id: number, atividadeComplementar: CreateAtividadeComplementarDto): Observable<AtividadeComplementar> {
        return this.http.put<AtividadeComplementar>(this.url + "/api/nisac/atividade/complementar/update/" + id, atividadeComplementar);
    }

    changeStatus(id: number, status: boolean): Observable<AtividadeComplementar> {
        return this.http.put<AtividadeComplementar>(this.url + "/api/nisac/atividade/complementar/" + id + "/" + status, {});
    }
}
