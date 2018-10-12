import { Component, OnInit } from '@angular/core';
import { PayeesDAOService } from '../../core/payees-dao.service';
import { flatten } from 'flat';
import * as _ from 'lodash';
import { Payee } from '../Payee';

@Component({
  selector: 'payees-list-routed',
  templateUrl: './payees-list-routed.component.html',
  styles: []
})
export class PayeesListRoutedComponent implements OnInit {

  payees: Payee[];
  displayPayees: Payee[];
  selectedPayee: Payee;
  lastSortField = '';

  /*
   * Selecting a Payee is more than simply setting selectedPayee
   * Add Router to the injected dependencies for this component
   *
   * In handleSelectPayee, get the ID of the selectedPayee, and pass it
   * to the navigate() method of the Router to change the view to
   * PayeesDetailRouted.
   *
   * In payees-detail-routed.component.ts, update the component as follows:
   * - Add the DAO and ActivatedRoute as dependencies
   * - update getPayee to be passed a payeeId and to use the ActivatedRoute
   *   to figure out the ID of the Payee being requested
   * - Then use the DAO to request that Payee (You can delete the code which
   *   refers to firstPayee and lastPayee)
   * - When the DAO returns the matching Payee, make that Payee the selectedPayee
   *   which should populate the component
   * - Try your code by visiting http://localhost:4200/payees/detail/23, which
   *   should display Payee #23
   * - Also go to the List view, and click on a Payee. This should bring you to the
   *   detail view for the appropriate Payee
   * - The buttons (Next, Previous, Back) do not make sense in this context, delete them
   *
   */
  constructor(private dao: PayeesDAOService) { }

  ngOnInit() {
    console.log( 'Dao: ', this.dao );
    this.dao.list()
        .subscribe( payees => {
          this.payees = payees;
          this.displayPayees = [ ...payees ];
          this.selectedPayee = payees[ 0 ];
        } );
  }

  handleUpdateFilter( criteria ) {
    const flatCriteria = flatten( criteria );
    const flatNotEmpty = _.pickBy( flatCriteria, ( v, k ) => Boolean( v ) );
    const criteriaKeys = Object.keys( flatNotEmpty );
    const matchers = {};
    criteriaKeys.forEach( key => matchers[ key ] = new RegExp( _.get( criteria, key ), 'i' ) );

    this.displayPayees = this.payees.filter( ( payee: Payee ) => {
      return criteriaKeys.every( ( key: string ) => {
        return matchers[ key ].test( _.get( payee, key ) );
      } );
    } );
  }

  handleSortPayees( sortField ) {

    this.displayPayees = _.sortBy( this.payees, sortField );
    if ( sortField === this.lastSortField ) {
      this.displayPayees.reverse();
      sortField = '-' + sortField;
    }
    this.lastSortField = sortField;

  }

  handleSelectPayee( payee ) {
    this.selectedPayee = payee;
  }


}
