import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Payee } from '../payees/Payee';
import { Observable, throwError } from 'rxjs';
import { SortCriteria, PayeesSearchCriteria } from '../payees/payees-types';
import { flatten } from 'flat';
import * as _ from 'lodash';
import { catchError, retry } from 'rxjs/operators';

@Injectable( {
  providedIn: 'root'
} )
export class PayeesDAOService {

  baseUrl = 'http://localhost:8000/payees';

  constructor( private client: HttpClient ) { }

  get( id: string ): Observable<Payee> {
    return this.client.get<Payee>( `${this.baseUrl}/${id}` )
               .pipe(
                 // If it was just a bad connection, retry twice
                 // retry(2),
                 catchError( this.handleError )
               );
  }

  search( criteria?: PayeesSearchCriteria, sortCriteria?: SortCriteria ): Observable<Payee[]> {
    let params: { [ key: string ]: string | string[] } = {};

    if ( sortCriteria ) {
      params._sort = sortCriteria.sortField;
      params._order = sortCriteria.ascending ? 'asc' : 'desc';
    }

    if ( criteria ) {
      const flatCriteria = _.omitBy( flatten( criteria ), _.isEmpty );
      params = { ...params, ...flatCriteria };

      const likeable = [ 'payeeName', 'motto', 'address.street', 'address.city', 'address.state', 'address.zip' ];
      likeable.forEach( field => {
        if ( params[ field ] ) {
          params[ `${field}_like` ] = params[ field ];
          delete params[ field ];
        }
      } );
    }

    return this.client.get<Payee[]>( this.baseUrl, {
      params: params
    } )
               .pipe(
                 // If it was just a bad connection, retry twice
                 // retry(2),
                 catchError( this.handleError )
               );
  }

  list(): Observable<Payee[]> {
    return this.search();
  }

  listWithCriteria( criteria: SortCriteria ) {
    return this.search( null, criteria );
  }

  private handleError( error: HttpErrorResponse ) {
    console.log( 'Raw error: ', error );

    if ( error.error instanceof ErrorEvent ) {
      console.error( 'There was a problem with the connection: ', error.error.message );
    } else {
      console.error( `The back-end returned status code ${error.status}
      The body was `, error.error );
    }

    return throwError( 'FriendlyError: Something went wrong in the DAO. ¯\\_(ツ)_/¯' );
  }
}
