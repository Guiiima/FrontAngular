import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Event } from './Event';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private baseUrl = 'http://localhost:5000/events';  // Substitua pela URL real do seu back-end

  constructor(private http: HttpClient) { }

  // Configuração dinâmica da URL base
  setBaseUrl(url: string): void {
    this.baseUrl = url;
  }

  // Obtém todos os eventos
  obterTodosEventos(): Observable<Event[]> {
    const url = `${this.baseUrl}/all`;
    return this.http.get<Event[]>(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Obtém um evento pelo ID
  obterEvento(id: number): Observable<Event> {
    const url = `${this.baseUrl}/get-by-id/${id}`;
    return this.http.get<Event>(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Cria um novo evento
  criarEvento(evento: Event): Observable<any> {
    const url = `${this.baseUrl}/new`;
    return this.http.post(url, evento, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Atualiza um evento
  atualizarEvento(evento: Event): Observable<any> {
    const url = `${this.baseUrl}/update`;
    return this.http.put(url, evento, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Exclui um evento pelo ID
  excluirEvento(id: number): Observable<any> {
    const url = `${this.baseUrl}/delete/${id}`;
    return this.http.delete(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Trata os erros de requisição HTTP
  private handleError(error: any): Observable<never> {
    console.error('Ocorreu um erro:', error);
    return throwError('Erro na requisição. Por favor, tente novamente.');
  }
}

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
