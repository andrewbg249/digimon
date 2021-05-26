import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DigimonService {

  url = 'https://digimon-api.vercel.app/api/digimon';
  // url = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(private http: HttpClient) { }

  getDigimons(): Observable<any> {
    return this.http.get<any>(this.url);
  }

  getDigimon(name: string): Observable<any> {
    return this.http.get<any>(this.url + '/name/' + name)
  }
}
