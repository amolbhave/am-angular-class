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
   * Adding multi-field filtering to PayeesList
   *
   * We are going to add filtering as a feature to all the fields in PayeesList
   *
   * Initially, your work will be in payees-list.component.ts, so go there first.
   *
   * Now that you have returned, uncomment the handleUpdateFilter function below. Note
   * that this is where the work of filtering is actually done.
   *
   * Go to payees-manager.component.html
   *
   *
   */
  constructor( private lookup: CategoryLookupService, private dao: PayeesDAOService ) { }

  ngOnInit() {
    console.log( 'Dao: ', this.dao );
    this.dao.list()
        .then( payees => {
          this.payees = payees;
          this.displayPayees = [ ...payees ];
          this.selectedPayee = payees[ 0 ];
        } );
  }

  switchView( view: PayeesViews ) {
    this.currentView = view;
  }

  getPayee( payee, dir ) {
    const pos = Math.max( Math.min( this.payees.indexOf( payee ) + dir, this.payees.length - 1 ), 0 );
    this.lastPayee = pos === this.payees.length - 1;
    this.firstPayee = pos === 0;
    return this.dao.get( this.payees[ pos ].id );
  }

  /*
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
  */

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
        .then( newPayee => this.selectedPayee = newPayee );
  }

  handlePrevious( dir ) {
    this.getPayee( this.selectedPayee, dir )
        .then( newPayee => this.selectedPayee = newPayee );
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
