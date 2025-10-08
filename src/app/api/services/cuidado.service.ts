import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { CreateCuidadoDto } from '../models/dto/CreateCuidadoDto';
import { Observable } from 'rxjs';
import { CuidadoResponse } from '../models/httpResponse/CuidadoResponse';
import { Cuidado } from '../models/entity/Cuidado';

@Injectable({
  providedIn: 'root'
})
export class CuidadoService
{

  url = environment.baseUrl;

  constructor(private http: HttpClient){}


  create(newCuidado : CreateCuidadoDto): Observable<CreateCuidadoDto>
  {
    return this.http.post<CreateCuidadoDto>(this.url + "/api/nisac/cuidado", newCuidado);
  }

  findAllPagination(page: number, size: number): Observable<CuidadoResponse>
  {
    return this.http.get<CuidadoResponse>( this.url + `/api/nisac/cuidado/pagination?page=${page}&size=${size}&status=true`);
  }

  findById(id : number) : Observable<Cuidado>
  {
    return this.http.get<Cuidado>( this.url + `/api/nisac/cuidado/${id}`);
  }
}
