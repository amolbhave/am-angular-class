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
   * You are going to create a new component which displays a list of payees
   *
   * For the moment, we will put PayeeDetailComponent aside. Comment it out in the HTML.
   *
   * Use the CLI to create a new component called PayeesListComponent
   *
   * The PayeesList component should expect to be passed an array of Payee objects.
   * It has no output events (yet).
   *
   * It should render the list into an HTML table. Add the Bootstrap
   * classes table, table-hover, and table-striped on the table
   *
   * Iterate over the payees list and generate a table row for each Payee
   * Display the payeeName, city, and state for the Payee
   *
   * Don't forget to update the HTML in payees-manager.component.html to
   * hide payee-detail and add payees-list
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

  handleNext( dir ) {
    this.getPayee( this.selectedPayee, dir )
        .then( newPayee => this.selectedPayee = newPayee );
  }

  handlePrevious( dir ) {
    this.getPayee( this.selectedPayee, dir )
        .then( newPayee => this.selectedPayee = newPayee );
  }

}
