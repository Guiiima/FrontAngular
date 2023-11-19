import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Reservation } from './Reservation';
import { ReservationRequest } from './ReservationRequest';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  baseUrl = 'http://localhost:5000/reservations';  

  constructor(private http: HttpClient) { }

  getAllReservations(): Observable<Reservation[]> {
    const url = `${this.baseUrl}/all-reservations`;
    return this.http.get<Reservation[]>(url);
  }

  getReservation(id: number): Observable<Reservation> {
    const url = `${this.baseUrl}/reservation/${id}`;
    return this.http.get<Reservation>(url);
  }

  createReservation(reservation: ReservationRequest): Observable<any> {
    const url = `${this.baseUrl}/new-reservation`;
    return this.http.post<Reservation>(url, reservation, httpOptions);
  }

  checkReservations(): Observable<any> {
    const url = `${this.baseUrl}/check-reservations`;
    return this.http.put(url, null, httpOptions);
  }

  cancelReservation(id: number): Observable<any> {
    const url = `${this.baseUrl}/cancel-reservation/${id}`;
    return this.http.delete(url, httpOptions);
  }
}

