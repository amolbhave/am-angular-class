import { Component, OnInit } from '@angular/core';
import { Payee } from '../Payee';
import { CategoryLookupService } from '../../core/category-lookup.service';
import { PayeesDAOService } from '../../core/payees-dao.service';

enum PayeesViews {
  DETAIL,
  LIST,
  WAITING
}

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
  currentView: PayeesViews = PayeesViews.LIST;

  // To make this available in the HTML template
  PayeesViews = PayeesViews;

  /*
   * We are adding sorting and basic filtering capabilities to our app
   *
   * Sorting:
   * For sorting, we do not want payees-list.component.ts to do the sorting
   * Rather, on clicking a table header, it will emit a sortPayees event with
   * a payload of the field to sort on.
   *
   * The sorting should be done here at PayeesManager.
   *
   * Go to payees-list.component.ts and follow the instructions there.
   *
   * Now that you have returned from payees-list.component.html, create an
   * event handler, handleSortPayees which will be passed a field to sort on
   *
   * At the top of this file, import sortBy from lodash. This will make it 
   * easier to sort on fields like 'address.state' without having to split the 
   * text or do other complicated data wrangling.
   * 
   * In the handleSortPayees function, use sortBy to sort payees. Remember that 
   * sortBy returns a brand new array. You will want to assign the sorted array 
   * to a new array, displayPayees. Always sort on payees, but render displayPayees.
   * 
   * Update payees-manager.component.html
   *
   * Test your code. Note that you probably only have one-way sorting at the moment.
   * As a challenge, try to write code that inverts the sort if you click on
   * the same field twice in a row
   *
   * Filtering:
   *
   * You will add basic filtering capabilities. Add a text field to the HTML template.
   * Capture its output with ngModel. When it updates, assume that you are
   * filtering against the payeeName property. Be sure to only update displayPayees,
   * but to filter against payees.
   *
   * All of your code for this part will be in payees-manager.component.ts
   * and payees-manager.component.html
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

  switchView( view: PayeesViews ) {
    this.currentView = view;
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

  handleSelectPayee( payee ) {
    this.selectedPayee = payee;
    this.switchView( PayeesViews.DETAIL );
  }

  handleBack() {
    this.switchView( PayeesViews.LIST );
    this.selectedPayee = null;
  }

}
