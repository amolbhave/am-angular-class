import { Component, EventEmitter, OnInit, Output } from '@angular/core';

export interface PayeeSearchCriteria {
  payeeName?: string;
  city?: string;
  state?: string;
  category?: string;
}

@Component({
  selector: 'payees-search',
  templateUrl: './payees-search.component.html',
  styles: []
})
export class PayeesSearchComponent implements OnInit {

  @Output()
  searchPayees = new EventEmitter<PayeeSearchCriteria>();

  criteria: PayeeSearchCriteria = {};

  constructor() { }

  ngOnInit() {
  }

  handleClick(criteria: PayeeSearchCriteria) {
    this.searchPayees.emit(criteria);
  }

  handlePickCategory(categoryId: string) {
    console.log('PayeesSearchComponent: selected Category: ', categoryId);
    this.criteria.category = categoryId;
  }

  handleSubmit(event) {
    event.preventDefault();
    return false;
  }

}
