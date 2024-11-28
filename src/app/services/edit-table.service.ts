import { Injectable } from '@angular/core';
import { Actividad } from '../models/actividades';
import { API_ROUTES } from '../../API-Routes';
import { HttpClient } from '@angular/common/http';
import { Proyecto } from '../models/actividades';
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class EditTableService {
  private url = API_ROUTES.baseUrl;
  constructor(private http: HttpClient) { }
  headers = new HttpHeaders({ 'Content-Type': 'application/json' ,
    'Authorization': `Token ${localStorage.getItem('authToken')}`}
  )
  ;
  id = localStorage.getItem('proyecto');
  
  editTable( data: Proyecto) {
    console.log(this.id);
    
    return this.http.put(this.url + API_ROUTES.project.edit+this.id, data, { headers: this.headers });
  }
  
  
  getTable() {
    console.log(this.id);
    return this.http.get<any>(this.url + API_ROUTES.project.view+'/'+this.id, { headers: this.headers });
  }
}
