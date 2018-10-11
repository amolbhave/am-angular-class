import { Component, OnInit } from '@angular/core';
import { Payee } from '../Payee';
import { payees } from '../../../data/payees';

@Component( {
  selector: 'payees-manager',
  templateUrl: './payees-manager.component.html',
  styles: [ /* Add a class that makes the background color green and the
   text white. Call it categoryIncome. Then go to the HTML template */
      `.categoryIncome {
      background-color: green;
      color: white
    }`
  ]
} )
export class PayeesManagerComponent implements OnInit {

  firstPayee = true;
  lastPayee = false;
  selectedPayee: Payee;
  payees: Payee[] = payees;

  constructor() { }

  ngOnInit() {
    setTimeout( () => ( this.selectedPayee = payees[ 0 ] ), 500 );
  }

  getPayeePosition(payee, dir) {
    const pos = Math.max(Math.min( this.payees.indexOf( payee ) + dir, this.payees.length - 1 ), 0);
    this.lastPayee = pos === this.payees.length - 1;
    this.firstPayee = pos === 0;
    return pos;
  }

  handleNext( payee ) {
    this.selectedPayee = this.payees[ this.getPayeePosition(payee, 1) ];
  }

  handlePrevious( payee ) {
    this.selectedPayee = this.payees[ this.getPayeePosition(payee, -1) ];
  }

}
