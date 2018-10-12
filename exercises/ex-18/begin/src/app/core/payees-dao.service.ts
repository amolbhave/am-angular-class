import { Injectable } from '@angular/core';
import { payees } from '../../data/payees';
import { Payee } from '../payees/Payee';

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

  list(): Promise<Payee[]> {
    return Promise.resolve( payees );
  }

  get( id: string ): Promise<Payee> {
    return new Promise( ( resolve, reject ) => {
      const payee = payees.find( p => p.id === id );

      if ( !payee ) {
        return reject( `Could not find payee with an ID of ${id}` );
      } else {
        return resolve( payee );
      }
    } );
  }
}
