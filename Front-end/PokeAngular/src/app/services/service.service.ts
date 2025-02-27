import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private baseUrl = "http://localhost:8000/";

  constructor(private http: HttpClient) { }

  getCardsSet1(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}apiSet1/set1/`);
  }

  getCardsSet2(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}apiSet2/set2/`);
  }

  getCardsSet3(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}apiSet3/set3/`);
  }

  getCardsSet4(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}apiSet4/set4/`);
  }

  getCardsSet5(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}apiSet5/set5/`);
  }

  // getUsers(): Observable<any> {
  //   return this.http.get<any>(`${this.baseUrl}apiUsers/`);
  // }

  register_users(datos: any): Observable<any> {
    return this.http.post(`${this.baseUrl}apiUsers/register/`, datos);
  }
}
