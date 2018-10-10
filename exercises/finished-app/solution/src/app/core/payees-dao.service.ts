import { Injectable } from '@angular/core';
import { Payee } from '../payees/Payee';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { PayeeSearchCriteria } from '../payees/payees-search/payees-search.component';
import { ParamMap } from '@angular/router';

@Injectable( {
  providedIn: 'root'
} )
export class PayeesDAOService {

  baseUrl = 'http://localhost:8000/payees';
  count = 0;
  idSeq = 200;

  constructor( private client: HttpClient ) { }

  list(): Observable<Payee[]> {
    return this.client.get<Payee[]>( this.baseUrl );
  }

  get( id: string | number ) {
    return this.client.get<Payee>( `${this.baseUrl}/${id}?_expand=category` );
  }

  search( criteria: PayeeSearchCriteria ): Observable<Payee[]> {
    const params = this.betterCriteriaToParams( criteria );
    params[ '_expand' ] = 'category';

    return this.client
               .get<Payee[]>( this.baseUrl,
                 { params } );
  }

  paramSearch(params: ParamMap) {
    let queryParams = new HttpParams();
    params
    .keys
    .forEach(key => queryParams = queryParams.set(key, params.get(key)));


    return this.client.get<Payee[]>(`${this.baseUrl}?_expand=category`,
      { params: queryParams });

  }

  betterCriteriaToParams( criteria: PayeeSearchCriteria ) {
    const params = {};
    Object.keys( criteria )
          .forEach( key => params[ this.getKey( key ) ] = criteria[ key ] );
    return params;
  }

  getKey( key ) {
    switch ( key ) {
      case 'payeeName':
        return 'payeeName_like';
      case 'city':
      case 'state':
        return `address.${key}_like`;
      case 'category':
        return 'categoryId';
    }
  }

  save( p: Payee ) {
    if ( !p.id ) {
      p.id = '' + this.idSeq++;
      this.client.post( this.baseUrl, p )
          .subscribe( results => console.log( 'results: ', results ) );
    } else {
      this.client.patch( `${this.baseUrl}/${p.id}`, p )
          .subscribe( results => console.log( 'results: ', results ) );
    }

  }

  size() {
    return this.count;
  }
}
