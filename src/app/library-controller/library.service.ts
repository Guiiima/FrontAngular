import { Injectable } from '@angular/core';
import { ILibrary } from './library';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class LibraryService {
  baseUrl = 'http://localhost:5000/library';
  constructor(private http: HttpClient) { }

  ObterLista(): Observable<ILibrary[]> {
    const url = `${this.baseUrl}/libraries`;
    return this.http.get<ILibrary[]>(url);

  }
}
