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

  /*
   * We intend to use the CategoryLookup service here. First, you will need
   * to create it. Use the CLI tool to create the service in the core directory
   *
   * The CategoryLookup service can have a findCategory method which takes a
   * categoryId as an argument and returns a Category object
   *
   * Use data/categories.ts as the list of categories
   *
   * Then return here and add it to the list of dependencies (currently empty) in the
   * constructor
   *
   * Any time selectedPayee gets set, check to see if it has a category property.
   * If it doesn't, add one with the Category provided by findCategory.
   *
   * Finally, add another line to the payee's display in the HTML template.
   * Display the categoryName for the displayed Payee
   */
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
