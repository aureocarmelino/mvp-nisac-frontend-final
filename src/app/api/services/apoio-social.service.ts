import { Injectable } from '@angular/core';
import { CreateApoioSocialDto } from '../models/dto/CreateApoioSocialDto';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { ApoioSocialResponse } from '../models/httpResponse/ApoioSocialResponse';
import { ApoioSocial } from '../models/entity/ApoioSocial';

@Injectable({
  providedIn: 'root'
})
export class ApoioSocialService
{
  url = environment.baseUrl;

  constructor(private http: HttpClient){}


  createApoioSocial(newApoioSocial : CreateApoioSocialDto): Observable<CreateApoioSocialDto>
  {
    return this.http.post<CreateApoioSocialDto>(this.url + "/api/nisac/apoio/social", newApoioSocial);
  }

  findAllPagination(page: number, size: number): Observable<ApoioSocialResponse>
  {
    return this.http.get<ApoioSocialResponse>( this.url + `/api/nisac/apoio/social/pagination?page=${page}&size=${size}&status=true`);
  }

  findById(id : string) : Observable<ApoioSocial>
  {
    return this.http.get<ApoioSocial>( this.url + `/api/nisac/apoio/social/${id}`);
  }


}
