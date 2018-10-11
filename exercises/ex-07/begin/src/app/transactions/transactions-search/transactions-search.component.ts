import { Component, EventEmitter, OnInit, Output } from '@angular/core';

export interface TransactionsSearchCriteria {
  payeeName?: string;
  category?: string;
}

@Component( {
  selector: 'transactions-search',
  templateUrl: './transactions-search.component.html',
  styles: []
} )
export class TransactionsSearchComponent implements OnInit {

  @Output()
  searchTransactions = new EventEmitter<TransactionsSearchCriteria>();

  criteria: TransactionsSearchCriteria = {};

  constructor() { }

  ngOnInit() {
  }

  handleClick(criteria: TransactionsSearchCriteria) {
    console.log( criteria );
    this.searchTransactions.emit(criteria);
  }

  handlePickCategory(categoryId: string) {
    console.log('TransactionsSearchComponent: selected Category: ', categoryId);
    this.criteria.category = categoryId;
  }

  handleSubmit(event) {
    event.preventDefault();
    return false;
  }

}
