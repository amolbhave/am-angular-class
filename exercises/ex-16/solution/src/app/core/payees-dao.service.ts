import { Injectable } from '@angular/core';
import { payees } from '../../data/payees';
import { Payee } from '../payees/Payee';

@Injectable( {
  providedIn: 'root'
} )
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
