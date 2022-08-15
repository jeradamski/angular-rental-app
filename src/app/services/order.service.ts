import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {MessageService} from "./message.service";
import {Order} from "../order";
import {catchError, Observable, of, pipe} from "rxjs";
import {Bike} from "../bike";


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
var params = new HttpParams();


@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private baseUrl = '/api';

  constructor(private http: HttpClient, private messageService: MessageService) { }

/*  addOrder(bikeId: number, order: Order): Observable<Order> {
    return this.http.post<Order>(`${this.baseUrl}/rent/${bikeId}?`, order, httpOptions ).pipe(
      catchError(this.handleError<Order>('addOrder'))
      );
  }*/

  addOrder(bikeId: number, order: Order) {
    params = params.append('firstName', order.firstName);
    params = params.append('lastName', order.lastName);
    params = params.append('street', order.street);
    params = params.append('houseAndApartmentNumber', order.houseAndApartmentNumber);
    params = params.append('postalCode', order.postalCode);
    params = params.append('city', order.city);
    params = params.append('emailAddress', order.emailAddress);
    params = params.append('phone', order.phone);
    params = params.append('rentalCost', order.rentalCost);
    params = params.append('rentalStartingDate', order.rentalStartingDate);
    params = params.append('rentalEndDate', order.rentalEndDate);

    return this.http.post(`${this.baseUrl}/rent/${bikeId}?`, '',{params:params} ).pipe(
      catchError(this.handleError<Order>('addOrder'))
    );
  }

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.baseUrl +"/admin/rentals").pipe(
      catchError(this.handleError<Order[]>('getOrders',[]))
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
