import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Emprestimo } from './Emprestimo';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class EmprestimoService {
  baseUrl = 'http://localhost:5000/emprestimo';
  constructor(private http: HttpClient) { }

  listar(): Observable<Emprestimo[]> {
    const url = `${this.baseUrl}/all`;
    return this.http.get<Emprestimo[]>(url);
  }

}
