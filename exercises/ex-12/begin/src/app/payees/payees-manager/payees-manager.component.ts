import { Component, OnInit } from '@angular/core';
import { Payee } from '../Payee';
import { CategoryLookupService } from '../../core/category-lookup.service';
import { PayeesDAOService } from '../../core/payees-dao.service';

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
  payees: Payee[];

  /*
   * You are going to create a new component, PayeeDetailComponent.
   *
   * Using the CLI, in the payees folder, create PayeeDetailComponent.
   * Don't forget that you can use --dry-run to test out the command first
   *
   * PayeeDetail should expect be passed a Payee as a property called
   * payee. That's an @Input() property as a reminder
   *
   * Move the enrichPayee, getStateColor, and getCardColor methods into
   * PayeeDetail
   * Also move the .categoryIncome class from above
   *
   * You may have to look at using ngOnChanges to call enrichPayee
   * whenever the payee changes.
   *
   * Move the appropriate code from payees-manager.component.html to
   * payee-detail.component.html. Replace that code with a reference to the
   * newly created <payee-detail> component. Don't forget to pass in selectedPayee.
   *
   * But keep the buttons in payees-manager.component.html
   *
   * When you're done, the UI should not have changed in appearance,
   * but you will have significantly refactored your code.
   *
   */
  constructor( private lookup: CategoryLookupService, private dao: PayeesDAOService ) { }

  ngOnInit() {
    console.log( 'Dao: ', this.dao );
    this.dao.list()
        .then( payees => {
          this.payees = payees;
          this.selectedPayee = this.enrichPayee( payees[ 0 ] );
        } );
  }

  enrichPayee( payee ) {
    if ( !payee.category ) {
      payee.category = this.lookup.findCategory( payee.categoryId );
    }

    return payee;
  }

  getPayee( payee, dir ) {
    const pos = Math.max( Math.min( this.payees.indexOf( payee ) + dir, this.payees.length - 1 ), 0 );
    this.lastPayee = pos === this.payees.length - 1;
    this.firstPayee = pos === 0;
    return this.dao.get( this.payees[ pos ].id )
               .then( p => this.enrichPayee( p ) );
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
    this.getPayee( payee, 1 )
        .then( newPayee => this.selectedPayee = newPayee );
  }

  handlePrevious( payee ) {
    this.getPayee( payee, -1 )
        .then( newPayee => this.selectedPayee = newPayee );
  }

}
