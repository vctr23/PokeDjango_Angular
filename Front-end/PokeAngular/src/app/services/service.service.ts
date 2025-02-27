import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  private baseUrl = 'http://localhost:8000/';
  private inventoryCards = new BehaviorSubject<any[]>([]);
  inventory$ = this.inventoryCards.asObservable(); // ✅ Observable para el inventario

  constructor(private http: HttpClient) {}

  getCardsSets(set: String): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}apiSet${set}/set${set}/`);
  }

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

  addCardsToInventory(cards: any[]): void {
    const currentInventory = this.inventoryCards.getValue();
    this.inventoryCards.next([...currentInventory, ...cards]); // ✅ Se mantienen las cartas anteriores
  }

  getInventoryCards(): any[] {
    return this.inventoryCards.getValue(); // ✅ Devuelve la lista actual de cartas
  }
}
