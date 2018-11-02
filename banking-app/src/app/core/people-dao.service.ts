import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Person } from '../people/Person';
import { catchError } from 'rxjs/operators';
import { PeopleSearchCriteria, SortCriteria } from '../people/people-types';
import * as _ from 'lodash';
import { flatten } from 'flat';

@Injectable({
  providedIn: 'root'
})
export class PeopleDAOService {

  baseUrl = 'http://localhost:8000/people';

  constructor( private client: HttpClient ) { }

  get( id: string ): Observable<Person> {
    return this.client.get<Person>( `${this.baseUrl}/${id}` )
               .pipe(
                 // If it was just a bad connection, retry twice
                 // retry(2),
                 catchError( this.handleError )
               );
  }

  search( criteria?: PeopleSearchCriteria, sortCriteria?: SortCriteria ): Observable<Person[]> {
    let params: { [ key: string ]: string | string[] } = {};

    if ( sortCriteria ) {
      params._sort = sortCriteria.sortField;
      params._order = sortCriteria.ascending ? 'asc' : 'desc';
    }

    if ( criteria ) {
      const flatCriteria = _.omitBy( flatten( criteria ), _.isEmpty );
      params = { ...params, ...flatCriteria };

      const likeable = [ 'personName', 'motto', 'address.street', 'address.city', 'address.state', 'address.zip' ];
      likeable.forEach( field => {
        if ( params[ field ] ) {
          params[ `${field}_like` ] = params[ field ];
          delete params[ field ];
        }
      } );
    }

    return this.client.get<Person[]>( this.baseUrl, {
      params: params
    } )
               .pipe(
                 // If it was just a bad connection, retry twice
                 // retry(2),
                 catchError( this.handleError )
               );
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
