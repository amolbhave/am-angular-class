import { Component, OnInit } from '@angular/core';
import { Payee } from '../Payee';
import { CategoryLookupService } from '../../core/category-lookup.service';
import { PayeesDAOService } from '../../core/payees-dao.service';
import * as _ from 'lodash';
import { flatten } from 'flat';

enum PayeesViews {
  DETAIL,
  LIST,
  WAITING
}

@Component( {
  selector: 'payees-manager',
  templateUrl: './payees-manager.component.html',
  styles: []
} )
export class PayeesManagerComponent implements OnInit {

  firstPayee = true;
  lastPayee = false;
  selectedPayee: Payee;
  payees: Payee[];
  displayPayees: Payee[];
  lastSortField = '';
  currentView: PayeesViews = PayeesViews.LIST;

  PayeesViews = PayeesViews;

  /*
   * We already depend on PayeesDAOService here, but now our ngOnInit needs
   * updating. Change the call to list() to expect an Observable (subscribe())
   * instead of a promise (then()). The code inside the function passsed
   * to subscribe should not change.
   *
   * Also update users of getPayee, which uses the get() method of the DAO.
   * Specifically, handleNext and handlePrevious will now have to handle
   * Observables instead of Promsies.
   *
   * Finally, change getPayee. The current comparison will not work, because
   * the reference to payee is no longer the same reference that came from this.payees.
   * Update indexOf so that it's argument comes from a call to this.payees.find()
   * which will allow for matching payees by id (or whatever criteria
   * your function might specify)
   *
   */
  constructor( private lookup: CategoryLookupService, private dao: PayeesDAOService ) { }

  ngOnInit() {
    console.log( 'Dao: ', this.dao );
    this.dao.list()
        .subscribe( payees => {
          this.payees = payees;
          this.displayPayees = [ ...payees ];
          this.selectedPayee = payees[ 0 ];
        } );
  }

  switchView( view: PayeesViews ) {
    this.currentView = view;
  }

  getPayee( payee, dir ) {
    const pos = Math.max( Math.min( this.payees.indexOf( this.payees.find( p => p.id === payee.id ) ) + dir, this.payees.length - 1 ), 0 );
    this.lastPayee = pos === this.payees.length - 1;
    this.firstPayee = pos === 0;
    return this.dao.get( this.payees[ pos ].id );
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

  handleNext( dir ) {
    this.getPayee( this.selectedPayee, dir )
        .subscribe( newPayee => this.selectedPayee = newPayee );
  }

  handlePrevious( dir ) {
    this.getPayee( this.selectedPayee, dir )
        .subscribe( newPayee => this.selectedPayee = newPayee );
  }

  handleSelectPayee( payee ) {
    this.selectedPayee = payee;
    this.switchView( PayeesViews.DETAIL );
  }

  handleBack() {
    this.switchView( PayeesViews.LIST );
    this.selectedPayee = null;
  }

}
