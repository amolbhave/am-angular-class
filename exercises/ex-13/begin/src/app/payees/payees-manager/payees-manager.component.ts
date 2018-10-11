import { Component, OnInit } from '@angular/core';
import { Payee } from '../Payee';
import { CategoryLookupService } from '../../core/category-lookup.service';
import { PayeesDAOService } from '../../core/payees-dao.service';

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

  /*
   * You are going to move the previous and next buttons into PayeeDetailComponent
   *
   * First, move the buttons from payees-manager.component.html to payee-detail.component.html
   * DO NOT MOVE handleNext and handlePrevious
   *
   * Then, add code to PayeeDetail so that when those buttons are clicked on, they fire
   * custom events: onNextPayee, onPreviousPayee
   *
   * Both custom events should emit enough information to figure out the next or previous payee
   * 
   */
  constructor( private lookup: CategoryLookupService, private dao: PayeesDAOService ) { }

  ngOnInit() {
    console.log( 'Dao: ', this.dao );
    this.dao.list()
        .then( payees => {
          this.payees = payees;
          this.selectedPayee = payees[ 0 ];
        } );
  }

  getPayee( payee, dir ) {
    const pos = Math.max( Math.min( this.payees.indexOf( payee ) + dir, this.payees.length - 1 ), 0 );
    this.lastPayee = pos === this.payees.length - 1;
    this.firstPayee = pos === 0;
    return this.dao.get( this.payees[ pos ].id );
  }

  handleNext( payee ) {
    this.getPayee( payee, 1 )
        .then( newPayee => this.selectedPayee = newPayee );
  }

  handlePrevious( payee ) {
    this.getPayee( payee, -1 )
        .then( newPayee => this.selectedPayee = newPayee );
  }

}
