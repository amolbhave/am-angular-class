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
   * We have two components which we want to show under PayeesManager.
   * We need some code which determines which view to show
   * Aditionally, clicking on a Payee in PayeesList should take us to PayeeDetail
   * populated with the aforeclickedupon Payee.
   *
   * Part 1:
   * Create an enum, PayeesViews with three values, DETAIL, LIST, and WAITING
   * Add an instance variable to PayeesManagerComponent, currentView, typed as a PayeesViews
   * Set instanceView to LIST initially
   * Create an instance variable PayeesViews, set equal to the PayeesViews enum (making it
   * available to the view)
   *
   * Write a method, switchView, which takes a PayeesViews as an argument
   * It should set this.currentView to the passed PayeesViews
   *
   * Then go to payees-manager.component.html and follow the directions there. 
   *
   * Part 2:
   * PayeesList now emits a selectPayee custom event. Write an event handler
   * which calls switchView and switches the view to DETAIL and also sets
   * selectedPayee to the payee passed by selectPayee.
   *
   * You should be able to bring up the browser, see the list, click on a row
   * in the list, and display the clicked-upon payee
   *
   * Go to payees-detail.component.ts
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
