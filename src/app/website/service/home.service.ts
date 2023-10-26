import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { AppResponse } from 'src/app/app-response';
import { HomeDataLake } from '../models/home-model';
import { environment } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private baseUrl = environment.baseUrl;
  private httpClient = inject(HttpClient);

  getHomeItem(): Observable<AppResponse<HomeDataLake>> {
    const url = this.baseUrl + '/v1/lockups?lockupId=OmElnour.lockups.home';
    return this.httpClient.get<AppResponse<HomeDataLake>>(url);
  }

  getAboutUSItems(): Observable<AppResponse<HomeDataLake>> {
    const url = this.baseUrl + '/v1/lockups?lockupId=OmElnour.lockups.';
    return this.httpClient.get<AppResponse<HomeDataLake>>(url);
  }
}
