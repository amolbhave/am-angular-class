import { Component, OnInit } from '@angular/core';
import { Payee } from '../Payee';
import { payees } from '../../../data/payees';

@Component( {
  selector: 'payees-manager',
  templateUrl: './payees-manager.component.html',
  styles: [ `.categoryIncome {
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

  getPayeePosition( payee, dir ) {
    const pos = Math.max( Math.min( this.payees.indexOf( payee ) + dir, this.payees.length - 1 ), 0 );
    this.lastPayee = pos === this.payees.length - 1;
    this.firstPayee = pos === 0;
    return pos;
  }

  getStateColor( state ) {
    const style = {
      color: 'black'
    };
    if ( state === 'NJ' ) {
      style.color = 'red';
    } else if ( state === 'CA' ) {
      style.color = 'green';
    }

    return style;
  }

  getCardColor( categoryId ) {
    const classes = [];
    if ( categoryId < 100 ) {
      classes.push( 'bg-warning', 'text-success' );
    } else if ( [ '106', '107' ].includes( categoryId ) ) {
      classes.push( 'bg-light', 'text-dark' );
    } else if ( categoryId === '105' ) {
      classes.push( 'bg-danger', 'text-light' );
    }

    return classes;
  }

  handleNext( payee ) {
    this.selectedPayee = this.payees[ this.getPayeePosition( payee, 1 ) ];
  }

  handlePrevious( payee ) {
    this.selectedPayee = this.payees[ this.getPayeePosition( payee, -1 ) ];
  }

}
