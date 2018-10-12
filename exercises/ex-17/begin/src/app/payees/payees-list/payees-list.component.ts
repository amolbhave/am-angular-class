import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Payee } from '../Payee';

@Component( {
  selector: 'payees-list',
  templateUrl: './payees-list.component.html',
  styles: []
} )
export class PayeesListComponent implements OnInit {

  @Input()
  payees: Payee[];

  @Output()
  selectPayee = new EventEmitter<Payee>();

  @Output()
  sortPayees = new EventEmitter<string>();

  /*
   * Set up an interface, PayeesFilter, which contains the structure of the filter:
   * {
   *   payeeName
   *   address {
   *     city
   *     state
   *   }
   * }
   *
   * Create a variable, filterCriteria, which is typed as PayeesFilter, and
   * initializes its values to empty strings
   *
   * Add an event emitter, updateFilter, which emits PayeesFilter-typed data
   * Add an event handler, handleFilterUpdate, which actually does the emitting
   *
   * Then go to payees-list.component.html
   */
  constructor() { }

  ngOnInit() {
  }

  handleClick( payee ) {
    this.selectPayee.emit( payee );
  }

  handleSort( sortField ) {
    this.sortPayees.emit( sortField );
  }

}
