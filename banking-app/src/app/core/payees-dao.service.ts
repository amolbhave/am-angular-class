import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Payee } from '../payees/Payee';
import { Observable } from 'rxjs';
import { SortCriteria } from '../payees/payees-types';

@Injectable( {
  providedIn: 'root'
} )
export class PayeesDAOService {

  baseUrl = 'http://localhost:8000/payees';

  constructor( private client: HttpClient ) { }

  get( id: string ): Observable<Payee> {
    return this.client.get<Payee>( `${this.baseUrl}/${id}` );
  }

  list(): Observable<Payee[]> {
    return this.client.get<Payee[]>( this.baseUrl );
  }

  sortedList( fieldName: string, direction?: string ): Observable<Payee[]> {
    return this.client.get<Payee[]>( this.baseUrl, {
      params: {
        _sort: fieldName,
        _order: direction ? direction : 'asc'
      }
    } );
  }

  listWithCriteria( criteria: SortCriteria ) {
    return this.client.get<Payee[]>( this.baseUrl, {
      params: {
        _sort: criteria.sortField,
        _order: criteria.ascending ? 'asc' : 'desc'
      }
    } );
  }

  search( payeeName: string ) {
    return this.client.get<Payee[]>( this.baseUrl, {
      params: {
        payeeName_like: payeeName
      }
    } );
  }
}
