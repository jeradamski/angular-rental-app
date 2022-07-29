import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

import { Bike } from '../bike';
import {catchError, Observable, of, pipe} from "rxjs";
import {MessageService} from "./message.service";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class BikeService {

  private baseUrl = '/api';
  constructor(private http: HttpClient, private messageService: MessageService) { }

  getBikes(): Observable<Bike[]> {
    return this.http.get<Bike[]>(this.baseUrl +"/bikes-list").pipe(
      catchError(this.handleError<Bike[]>('getBikes',[]))
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
