import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { CreateTeleAssistenciaDto } from '../models/dto/CreateTeleAssistenciaDto';
import { Observable } from 'rxjs';
import { TeleAssistencia } from '../models/entity/TeleAssistencia';
import { TeleAssistenciaResponse } from '../models/httpResponse/TeleAssistenciaResponse';

@Injectable({
  providedIn: 'root'
})
export class TeleAssistenciaService
{
  url = environment.baseUrl;

  constructor(private http: HttpClient){}


  create(newTeleassistencia : CreateTeleAssistenciaDto): Observable<CreateTeleAssistenciaDto>
  {
    return this.http.post<CreateTeleAssistenciaDto>(this.url + "/api/nisac/teleassistencia", newTeleassistencia);
  }

  findAllPagination(page: number, size: number): Observable<TeleAssistenciaResponse>
  {
    return this.http.get<TeleAssistenciaResponse>( this.url + `/api/nisac/teleassistencia/pagination?page=${page}&size=${size}&status=true`);
  }

  findById(id : string) : Observable<TeleAssistencia>
  {
    return this.http.get<TeleAssistencia>( this.url + `/api/nisac/teleassistencia/${id}`);
  }
}
