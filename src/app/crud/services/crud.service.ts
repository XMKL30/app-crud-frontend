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
}
