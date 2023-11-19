import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { EditoraAfiliada } from './EditoraAfiliada';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class EditoraAfiliadaService {
  baseUrl = 'http://localhost:5000/editora';
  constructor(private http: HttpClient) { }

  listar(): Observable<EditoraAfiliada[]> {
    const url = `${this.baseUrl}/all`;
    return this.http.get<EditoraAfiliada[]>(url);
  }

  newEditora(editora: EditoraAfiliada): Observable<any> {
    const url = `${this.baseUrl}/new`;
    return this.http.post<EditoraAfiliada>(url, editora, httpOptions);
  }


}
