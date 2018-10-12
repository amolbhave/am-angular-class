import { Injectable } from '@angular/core';
import { payees } from '../../data/payees';
import { Payee } from '../payees/Payee';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable( {
  providedIn: 'root'
} )

export class PayeesDAOService {

  baseUrl = 'http://localhost:8000/payees';

  constructor(private client: HttpClient) { }

  list(): Observable<Payee[]> {
    return this.client.get<Payee[]>(this.baseUrl);
  }

  get( id: string ): Observable<Payee> {
    return this.client.get<Payee>(`${this.baseUrl}/${id}`);
  }
}
