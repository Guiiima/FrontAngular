import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { StudyRoom } from './StudyRoom';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class StudyRoomService {
  baseUrl = 'http://localhost:5000/study-room';
  constructor(private http: HttpClient) { }

  allRooms(): Observable<StudyRoom[]> {
    const url = `${this.baseUrl}/`;
    return this.http.get<StudyRoom[]>(url);
  }

  freeRooms(): Observable<StudyRoom[]> {
    const url = `${this.baseUrl}/free-rooms`;
    return this.http.get<StudyRoom[]>(url);
  }

  search(roomNumber: number): Observable<StudyRoom> {
    const url = `${this.baseUrl}/${roomNumber}`;
    return this.http.get<StudyRoom>(url);
  }

  findRoomsByCapacity(capacity: number): Observable<StudyRoom[]> {
    const url = `${this.baseUrl}/capacity/${capacity}`;
    return this.http.get<StudyRoom[]>(url);
  }

  newRoom(studyRoom: StudyRoom): Observable<any> {
    const url = `${this.baseUrl}/new-room`;
    return this.http.post<StudyRoom>(url, studyRoom, httpOptions);
  }

  changeOccupation(roomNumber: number): Observable<any> {
    const url = `${this.baseUrl}/change-occupation/${roomNumber}`;
    return this.http.patch(url, null, httpOptions);
  }
}
