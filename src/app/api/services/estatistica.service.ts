import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { EstatisticaOcorrenciaMesActualResponse } from '../models/httpResponse/EstatisticaOcorrenciaMesActualResponse';
import { Observable } from 'rxjs';
import { ResumoDdsDtoResponse } from '../models/httpResponse/ResumoDdsDtoResponse';
import { ResumoDdsDto } from '../models/dto/dds/ResumoDdsDto';
import { DdsOcorrenciaFilter } from '../models/dto/dds/DdsOcorrenciaFilter';
import { RsblOcorrenciaFilter } from '../models/dto/rsbl/RsblOcorrenciaFilter';
import { ResumoRsblDto } from '../models/dto/rsbl/ResumoRsblDto';

@Injectable({
  providedIn: 'root'
})
export class EstatisticaService
{
  url = environment.baseUrl;

  constructor(private http: HttpClient){}


  getOcorrenciaCountsForCurrentMonth(): Observable<EstatisticaOcorrenciaMesActualResponse>
  {
    return this.http.get<EstatisticaOcorrenciaMesActualResponse>( this.url + "/api/nisac/estatistica/ocorrencia/current-month");
  }


  obterResumoDdsPaginado(ddsOcorrenciaFilter: DdsOcorrenciaFilter, page: number, size: number): Observable<ResumoDdsDtoResponse>
  {
    //encodeURIComponent: Isso garante que caracteres especiais, como espaços e acentos, sejam codificados corretamente na URL.

    let queryParams: string = `page=${page}&size=${size}`;

    if (ddsOcorrenciaFilter.nomeCompleto)
    {
      queryParams += `&nomeCompleto=${encodeURIComponent(ddsOcorrenciaFilter.nomeCompleto)}`;
    }

    if (ddsOcorrenciaFilter.dataInicio)
    {
      queryParams += `&dataInicio=${encodeURIComponent(ddsOcorrenciaFilter.dataInicio)}`;
    }

    if (ddsOcorrenciaFilter.dataFim)
    {
      queryParams += `&dataFim=${encodeURIComponent(ddsOcorrenciaFilter.dataFim)}`;
    }

    return this.http.get<ResumoDdsDtoResponse>(`${this.url}/api/nisac/estatistica/ocorrencias/dds?${queryParams}`);
  }


  obterResumoRsbl(rsblOcorrenciaFilter: RsblOcorrenciaFilter, page: number, size: number): Observable<ResumoRsblDto>
  {
    //encodeURIComponent: Isso garante que caracteres especiais, como espaços e acentos, sejam codificados corretamente na URL.

    let queryParams: string = `page=${page}&size=${size}`;

    if (rsblOcorrenciaFilter.nomeCompleto)
    {
      queryParams += `&nomeCompleto=${encodeURIComponent(rsblOcorrenciaFilter.nomeCompleto)}`;
    }

    if (rsblOcorrenciaFilter.dataInicio)
    {
      queryParams += `&dataInicio=${encodeURIComponent(rsblOcorrenciaFilter.dataInicio)}`;
    }

    if (rsblOcorrenciaFilter.dataFim)
    {
      queryParams += `&dataFim=${encodeURIComponent(rsblOcorrenciaFilter.dataFim)}`;
    }

    return this.http.get<ResumoRsblDto>(`${this.url}/api/nisac/estatistica/ocorrencias/resumo/rsbl?${queryParams}`);
  }



}
