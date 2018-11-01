import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Payee } from './Payee';
import { Observable, of } from 'rxjs';
import { take, mergeMap } from 'rxjs/operators';
import { PayeesDAOService } from '../core/payees-dao.service';

@Injectable( {
  providedIn: 'root'
} )
export class PayeeDetailResolverService implements Resolve<Payee> {

  constructor( private dao: PayeesDAOService ) { }

  resolve( route: ActivatedRouteSnapshot,
           state: RouterStateSnapshot ): Observable<Payee> {
    console.log( 'resolver', route.params.id );
    return this.dao
               .get( route.params.id );
  }
}
