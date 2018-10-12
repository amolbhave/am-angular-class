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
   * Add an event emitter, sortPayees, which will send back a string
   * 
   * Add an event handler, handleSort, which will fire the above event emitter.
   * 
   * Go to payees-list.component.html
   */
  constructor() { }

  ngOnInit() {
  }

  handleClick( payee ) {
    this.selectPayee.emit( payee );
  }
  
  handleSort(sortField) {
    this.sortPayees.emit(sortField);
  }

}
