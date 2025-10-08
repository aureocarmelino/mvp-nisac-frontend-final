import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CreateTipoEquipamentoDto } from '../models/dto/CreateTipoEquipamentoDto';
import { environment } from '../../../environments/environment.development';
import { Observable } from 'rxjs';
import { TipoEquipamento } from '../models/entity/TipoEquipamento';
import { TipoEquipamentoResponse } from '../models/httpResponse/TipoEquipamentoResponse';


@Injectable({
  providedIn: 'root'
})
export class TipoEquipamentoService
{
  url = environment.baseUrl;

  constructor(private http: HttpClient){}


  create(newTipoEquipamento : CreateTipoEquipamentoDto): Observable<CreateTipoEquipamentoDto>
  {
    return this.http.post<CreateTipoEquipamentoDto>(this.url + "/api/nisac/tipo/equipamento", newTipoEquipamento );
  }

  findAllTipoEquipamentoPagination(page: number, size: number): Observable<TipoEquipamentoResponse>
  {
    return this.http.get<TipoEquipamentoResponse>( this.url + `/api/nisac/tipo/equipamento/pagination?page=${page}&size=${size}&status=true`);
  }

  findAllTipoEquipamento(): Observable<TipoEquipamento[]>
  {
    return this.http.get<TipoEquipamento[]>( this.url + `/api/nisac/tipo/equipamento/ativos/true`);
  }

  findById(id : string) : Observable<TipoEquipamento>
  {
    return this.http.get<TipoEquipamento>( this.url + `/api/nisac/tipo/equipamento/${id}`);
  }
}
