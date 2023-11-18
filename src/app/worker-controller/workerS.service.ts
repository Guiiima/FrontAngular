import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import {  IWorker } from './worker';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class workerService {
  baseUrl = 'http://localhost:5000/worker';
  constructor(private http: HttpClient) { }

  ObterLista(): Observable<IWorker[]> {
    const url = `${this.baseUrl}/all-workers`;
    return this.http.get<IWorker[]>(url);

  }

}

