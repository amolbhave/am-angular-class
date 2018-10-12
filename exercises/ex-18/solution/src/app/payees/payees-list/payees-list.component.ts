import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Payee } from '../Payee';

interface PayeesFilter {
  payeeName?: string;
  address?: {
    city?: string;
    state?: string;
  };
}

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

  @Output()
  updateFilter = new EventEmitter<PayeesFilter>();

  filterCriteria: PayeesFilter = {
    payeeName: '',
    address: {
      city: '',
      state: ''
    }
  };

  constructor() { }

  ngOnInit() {
  }

  handleFilterUpdate() {
    this.updateFilter.emit( this.filterCriteria );
  }

  handleClick( payee ) {
    this.selectPayee.emit( payee );
  }

  handleSort( sortField ) {
    this.sortPayees.emit( sortField );
  }

}
