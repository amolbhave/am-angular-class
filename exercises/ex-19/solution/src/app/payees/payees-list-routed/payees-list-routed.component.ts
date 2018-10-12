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
