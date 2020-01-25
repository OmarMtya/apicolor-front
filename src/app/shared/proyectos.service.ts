import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  constructor(private http: HttpClient) { }

  getProyecto(id: string){
    return this.http.get(environment.url + '/proyecto/' + id).toPromise();
  }
}
