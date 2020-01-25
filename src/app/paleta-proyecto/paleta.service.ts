import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaletaService {

  constructor(private http: HttpClient) { }

  getPaleta(id: string){
    return this.http.get(environment.url + '/generar/' + id, {}).toPromise();
  }
}
