import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Payee } from '../Payee';
import { SortCriteria } from '../payees-types';

@Component( {
  selector: 'payees-list',
  templateUrl: './payees-list.component.html',
  styleUrls: [ './payees-list.component.css' ]
} )
export class PayeesListComponent implements OnInit {

  @Input()
  payees: Payee[];

  @Input()
  sortCriteria: SortCriteria;

  @Output()
  selectPayee = new EventEmitter<Payee>();

  @Output()
  sortPayees = new EventEmitter<string>();

  constructor() { }

  getSortIndicator( fieldName ) {
    if ( fieldName === this.sortCriteria.sortField ) {
      return this.sortCriteria.ascending ? 'sort-asc' : 'sort-desc';
    }

    return 'sort-none';
  }

  handleClick( payee: Payee ) {
    this.selectPayee.emit( payee );
  }

  handleHeaderClick( sortField: string ) {
    console.log( 'PayeesListComponent.handleHeaderClick(): ', sortField );
    this.sortPayees.emit( sortField );
  }

  ngOnInit() {
  }

}
