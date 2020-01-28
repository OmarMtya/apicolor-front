import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InsertarProyectoService {

  constructor(private http: HttpClient) { }

  getCategoria(id: string){
    return this.http.get(environment.url + '/categoria/' + id).toPromise();
  }

  insertarProyecto(data: any){
    return this.http.post(environment.url + '/proyecto', data).toPromise();
  }

}
