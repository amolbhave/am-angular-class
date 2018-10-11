import { Component, OnInit } from '@angular/core';
import { Payee } from '../Payee';
import { CategoryLookupService } from '../../core/category-lookup.service';
import { PayeesDAOService } from '../../core/payees-dao.service';

@Component( {
  selector: 'payees-manager',
  templateUrl: './payees-manager.component.html',
  styles: [ ]
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
