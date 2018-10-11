import { Component, OnInit } from '@angular/core';
import { Payee } from '../Payee';
import { payees } from '../../../data/payees';

@Component( {
  selector: 'payees-manager',
  templateUrl: './payees-manager.component.html',
  styles: [ /* Add a class that makes the background color green and the
   text white. Call it categoryIncome. Then go to the HTML template */ ]
} )
export class PayeesManagerComponent implements OnInit {

  selectedPayee: Payee;
  payees: Payee[] = payees;

  constructor() { }

  ngOnInit() {
    setTimeout( () => ( this.selectedPayee = payees[ 0 ] ), 2000 );
  }

  handleNext( payee ) {
    this.selectedPayee = this.payees[ Math.min( this.payees.indexOf( payee ) + 1, this.payees.length - 1 ) ];
  }

  handlePrevious( payee ) {
    this.selectedPayee = this.payees[ Math.max( this.payees.indexOf( payee ) - 1, 0 ) ];
  }

}
