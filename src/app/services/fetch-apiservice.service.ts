import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface MarsPhotos {
  photos: any[];
}

@Injectable({
  providedIn: 'root'
})
export class MarsApiService {

  constructor(private http: HttpClient) { }

  fetchPhotos(apiEndpoint: string): Observable<MarsPhotos> {
    return this.http.get<MarsPhotos>(apiEndpoint);
  }
}