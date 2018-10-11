import { Component, OnInit } from '@angular/core';
import { Payee } from '../Payee';

// Payees have already been imported for you
import { payees } from '../../../data/payees';

@Component( {
  selector: 'payees-manager',
  templateUrl: './payees-manager.component.html',
  styles: []
} )
export class PayeesManagerComponent implements OnInit {

  // payee has been renamed selectedPayee
  selectedPayee: Payee;

  // The list of payees we imported is available here
  payees: Payee[] = payees;

  constructor() { }

  ngOnInit() {
    setTimeout( () => ( this.selectedPayee = payees[ 0 ] ), 2000 );
  }

  // Write two event handlers: handleNext and handlePrevious
  // Each will be passed a payee. Use that payee to determine what the next
  // or previous payee in payees is and assign that payee to selectedPayee
  // Then go to the HTML template

}
