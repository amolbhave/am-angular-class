import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Transaction } from '../transactions/Transaction';
import { catchError, map } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';
import { TransactionsSearchCriteria } from '../transactions/transactions-search/transactions-search.component';
import { ParamMap } from '@angular/router';

@Injectable( {
  providedIn: 'root'
} )
export class TransactionsDAOService {
  count = 0;
  idSeq = 2000;
  baseUrl = 'http://localhost:8000/tx';

  constructor( private client: HttpClient ) { }

  list(): Observable<Transaction[]> {
    return this.client
               .get<Transaction[]>( this.baseUrl )
               .pipe(catchError(this.handleError));
  }

  get( id: string | number ) {
    return this.client
               .get<Transaction>( `${this.baseUrl}/${id}?_expand=category&_expand=payee` )
               .pipe(catchError(this.handleError));
  }

  handleError(error) {
    // An opportunity to handle the error locally, and mask the HTTP data that comes through
    return throwError('Something bad happened');
  }

  search( criteria: TransactionsSearchCriteria ): Observable<Transaction[]> {
    const params = this.betterCriteriaToParams( criteria );
    params[ '_expand' ] = [ 'category', 'payee' ];

    return this.client
               .get<Transaction[]>( this.baseUrl,
                 { params } );
  }

  paramSearch( params: ParamMap ) {
    let queryParams = new HttpParams();
    params
    .keys
    .forEach( key => queryParams = queryParams.set( key, params.get( key ) ) );
    queryParams = queryParams.delete( 'payeeName' );
    queryParams = queryParams.delete( 'payeeName_like' );

    // Depth search doesn't work in json-server, so we have to sort payee names on the client side
    return this.client.get<Transaction[]>( `${this.baseUrl}?_expand=category&_expand=payee`,
      { params: queryParams } )
               .pipe( map( txs => {
                 if ( !params.has( 'payeeName_like' ) ) {
                   return txs;
                 }
                 return txs.filter( tx => {
                   return tx.payee && tx.payee.payeeName.toUpperCase()
                                        .includes( params.get( 'payeeName_like' )
                                                         .toUpperCase() );
                 } );
               } ) );

  }

  betterCriteriaToParams( criteria: TransactionsSearchCriteria ) {
    const params = {};
    Object.keys( criteria )
          .forEach( key => params[ this.getKey( key ) ] = criteria[ key ] );
    return params;
  }

  getKey( key ) {
    switch ( key ) {
      case 'payeeName':
        return 'payeeName_like';
      case 'category':
        return 'categoryId';
    }
  }

  save( t: Transaction ) {
    if ( !t.id ) {
      t.id = '' + this.idSeq++;
      this.client.post( this.baseUrl, t )
          .subscribe( results => console.log( 'results: ', results ) );
    } else {
      this.client.patch( `${this.baseUrl}/${t.id}`, t )
          .subscribe( results => console.log( 'results: ', results ) );
    }

  }

  size() {
    return this.count;
  }
}
