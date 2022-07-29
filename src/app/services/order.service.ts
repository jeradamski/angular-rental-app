import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {MessageService} from "./message.service";
import {Order} from "../order";
import {catchError, Observable, of, pipe} from "rxjs";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private baseUrl = '/api';
  constructor(private http: HttpClient, private messageService: MessageService) { }

  addOrder(bikeId: number, order: Order): Observable<Order> {
    return this.http.post<Order>(`${this.baseUrl} + "/rent/" + ${bikeId}`, order, httpOptions ).pipe(
      catchError(this.handleError<Order>('addOrder'))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  private log(message: string) {
    this.messageService.add(`TodoService: ${message}`);
  }

}
