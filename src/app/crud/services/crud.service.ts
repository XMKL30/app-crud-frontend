import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Salesperson } from '../models/salesperson';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  private url: string = "http://localhost:8080/salesperson";

  constructor(private http: HttpClient) { }

  getData(): Observable<Salesperson[]> {
    return this.http.get<Salesperson[]>(this.url);
  }

  insert(salesperson: Salesperson) {
    return this.http.post(this.url, salesperson);
  }

  modify(salesperson: Salesperson) {
    return this.http.put(this.url, salesperson);
  }

  getById(id: string) {
    return this.http.get<Salesperson>(`${this.url}/${id}`);
  }

  delete(id: string) {
    return this.http.delete<Salesperson>(`${this.url}/${id}`);
  }

  getByName(name: string) {
    return this.http.get<Salesperson[]>(`${this.url}/search/name?name=${name}`);
  }
}
