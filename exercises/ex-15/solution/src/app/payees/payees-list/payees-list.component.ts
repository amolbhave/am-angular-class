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

  /*
   * Add an eventEmitter called selectPayee above this constructor
   * It should emit a Payee.
   *
   * Add an event handler, handleClick
   * It will be passed a payee, and it should emit the payee as the selectPayee event
   * 
   * Now go to payees-list.component.html
   */
  constructor() { }

  ngOnInit() {
  }

  handleClick( payee ) {
    this.selectPayee.emit( payee );
  }

}
