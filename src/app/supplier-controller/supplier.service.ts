import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Supplier } from './Supplier';
import { SupplierContract } from './SupplierContract';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class SupplierService {
  baseUrl = 'http://localhost:5000/supplier';
  constructor(private http : HttpClient) { }

  allSuppliers(): Observable<Supplier[]> {
    const url = `${this.baseUrl}/`;
    return this.http.get<Supplier[]>(url);
  }

  searchSupplier(): Observable<Supplier[]> {
    const url = `${this.baseUrl}/current`;
    return this.http.get<Supplier[]>(url);
  }

  findSupplierByName(name: string): Observable<Supplier[]> {
    const url = `${this.baseUrl}/name?name=${name}`;
    return this.http.get<Supplier[]>(url);
  }

  findSupplierById(id: number): Observable<Supplier> {
    const url = `${this.baseUrl}/id?id=${id}`;
    return this.http.get<Supplier>(url);
  }

  newSupplier(supplier: Supplier): Observable<any> {
    const url = `${this.baseUrl}/new`;
    return this.http.post<Supplier>(url, supplier, httpOptions);
  }

  modifySupplier(supplier: Supplier): Observable<Supplier> {
    const url = `${this.baseUrl}/modify`;
    return this.http.put<Supplier>(url, supplier, httpOptions);
  }

  changeSupplierContract(contract: SupplierContract): Observable<Supplier> {
    const url = `${this.baseUrl}/modify-contract`;
    return this.http.patch<Supplier>(url, contract, httpOptions);
  }

  deleteSupplier(id: number | undefined): Observable<any> {
    const url = `${this.baseUrl}/delete-inactive?id=${id}`
    return this.http.delete<Supplier>(url);
  }
}
