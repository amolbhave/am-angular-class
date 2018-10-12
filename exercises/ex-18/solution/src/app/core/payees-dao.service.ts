import { Injectable } from '@angular/core';
import { payees } from '../../data/payees';
import { Payee } from '../payees/Payee';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable( {
  providedIn: 'root'
} )

/*
 * You are upgrading the app to use HttpClient behind the scenes.
 *
 * We have already imported HttpClientModule, as part of SharedModule
 * (You can check SharedModule to verify this).
 *
 * We need to inject HttpClient here. Add a constructor, and inject HttpClient
 * in the constructor
 *
 * Add a property, baseUrl, and point it at http://localhost:8000/payees
 *
 * Update list() and get() as follows:
 * Both should return Observables<> instead of Promises<>
 * Both should use HttpClient to request data
 * list() should request data from baseUrl
 * get() should request data from baseUrl/id
 *
 * Return the Observable directly from each of the functions
 *
 * Then go to payees-manager.component.ts
 */
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
