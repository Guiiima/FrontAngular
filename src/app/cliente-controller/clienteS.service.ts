import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import {  ICliente } from './cliente';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class clienteService {
  baseUrl = 'http://localhost:5000/clients';
  constructor(private http: HttpClient) { }

  ObterLista(): Observable<ICliente[]> {
    const url = `${this.baseUrl}/all-clients`;
    return this.http.get<ICliente[]>(url);

  }

}

