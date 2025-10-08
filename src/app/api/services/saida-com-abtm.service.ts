import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { CreateSaidaAbtmDto } from '../models/dto/CreateSaidaAbtmDto';
import { SaidaComAbtmResponse } from '../models/httpResponse/SaidaComAbtmResponse';
import { Observable } from 'rxjs';
import { SaidaAbtm } from '../models/entity/SaidaAbtm';

@Injectable({
  providedIn: 'root'
})
export class SaidaComAbtmService
{

  url = environment.baseUrl;

  constructor(private http: HttpClient){}


  create(newTrabalhoEfectuado : CreateSaidaAbtmDto): Observable<CreateSaidaAbtmDto>
  {
    return this.http.post<CreateSaidaAbtmDto>(this.url + "/api/nisac/saida/abtm", newTrabalhoEfectuado);
  }

  findAllPagination(page: number, size: number): Observable<SaidaComAbtmResponse>
  {
    return this.http.get<SaidaComAbtmResponse>( this.url + `/api/nisac/saida/abtm/pagination?page=${page}&size=${size}&status=true`);
  }


  findAllPaginationAvancado(saidaAbtmDto: CreateSaidaAbtmDto, page: number, size: number): Observable<SaidaComAbtmResponse>
  {
    //encodeURIComponent: Isso garante que caracteres especiais, como espaços e acentos, sejam codificados corretamente na URL.

    let queryParams: string = `page=${page}&size=${size}`;

    if (saidaAbtmDto.local)
    {
      queryParams += `&local=${encodeURIComponent(saidaAbtmDto.local)}`;
    }

    if (saidaAbtmDto.motivo)
    {
      queryParams += `&motivo=${encodeURIComponent(saidaAbtmDto.motivo)}`;
    }

    if (saidaAbtmDto.observacoes)
    {
      queryParams += `&observacoes=${encodeURIComponent(saidaAbtmDto.observacoes)}`;
    }

    return this.http.get<SaidaComAbtmResponse>(`${this.url}/api/nisac/saida/abtm/pagination?${queryParams}`);
  }


  findById(id : string) : Observable<SaidaAbtm>
  {
    return this.http.get<SaidaAbtm>( this.url + `/api/nisac/saida/abtm/${id}`);
  }
}
