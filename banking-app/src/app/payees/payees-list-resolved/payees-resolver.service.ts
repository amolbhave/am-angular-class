import { Injectable } from '@angular/core';
import { PayeesDAOService } from '../../core/payees-dao.service';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Payee } from '../Payee';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { PayeesSearchCriteria } from '../payees-types';
import { convertParamMapToObject } from '../../../utils';

@Injectable( {
  providedIn: 'root'
} )
export class PayeesResolverService implements Resolve<Payee[]> {

  constructor( private dao: PayeesDAOService,
               private router: Router) { }

  resolve( route: ActivatedRouteSnapshot,
           state: RouterStateSnapshot ): Observable<Payee[]> {
    return this.dao
               .search( convertParamMapToObject( route.queryParamMap ) )
               .pipe( catchError( err => throwError( err ) )
               );
  }
}
