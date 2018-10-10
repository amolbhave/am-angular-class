import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Payee } from '../Payee';

@Component( {
  selector: 'payees-list',
  templateUrl: './payees-list.component.html',
  styles: []
} )
export class PayeesListComponent implements OnChanges {

  @Input()
  payees: Payee[] = [];

  @Output()
  selectPayee = new EventEmitter<Payee>();

  @Output()
  editPayee = new EventEmitter<Payee>();

  constructor() { }

  ngOnChanges() {
    console.log( 'payees.length: ', this.payees ? this.payees.length : 'null' );
  }

  handleEditClick( payee: Payee ) {
    this.editPayee.emit( payee );
  }

  handleSelectPayee( payee: Payee ) {
    this.selectPayee.emit( payee );
  }

}
