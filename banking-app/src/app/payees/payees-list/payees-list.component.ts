import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Payee } from '../Payee';
import { SortCriteria } from '../payees-types';
import * as _ from 'lodash';
import { logThis } from '../../../utils';

@Component( {
  selector: 'payees-list',
  templateUrl: './payees-list.component.html',
  styleUrls: [ './payees-list.component.css' ]
} )
export class PayeesListComponent implements OnInit, OnChanges {

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

  ngOnChanges( changes: SimpleChanges ) {
    if ( changes[ 'payees' ] ) {
      console.log( 'Change! ',
        !changes[ 'payees' ].isFirstChange() && changes[ 'payees' ].currentValue.length > 0 && changes[ 'payees' ].currentValue[ 0 ].payeeName );
    }
  }

}
