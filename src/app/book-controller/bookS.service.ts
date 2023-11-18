import { Injectable } from '@angular/core';
import { IBook } from './book';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class BookService {
  baseUrl = 'http://localhost:5000/library';
  constructor(private http: HttpClient) { }

  ObterLista(): Observable<IBook[]> {
    const url = `${this.baseUrl}/books`;
    return this.http.get<IBook[]>(url);

  }
}
