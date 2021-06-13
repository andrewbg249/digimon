import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DigimonService {

  url = 'https://digimon-api.vercel.app/api/digimon';
  private error$ = new Subject<string>();
  private terminoBusqueda$ = new Subject<string>();

  constructor(private http: HttpClient) { }

  getDigimons(): Observable<any> {
    return this.http.get<any>(this.url);
  }
  
  getError(): Observable<string> {
    return this.error$.asObservable();
  }
  
  setError(mensaje: string) {
    this.error$.next(mensaje);
  }
  
  getDigimon(name: string): Observable<any> {
    return this.http.get<any>(this.url + '/name/' + name)
  }
}
