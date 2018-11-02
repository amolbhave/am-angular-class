import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Person } from '../Person';
import { SortCriteria } from '../../payees/payees-types';
import { Payee } from '../../payees/Payee';

@Component({
  selector: 'people-list',
  templateUrl: './people-list.component.html',
  styles: []
})
export class PeopleListComponent implements OnInit {

  @Input()
  people: Person[];

  @Input()
  sortCriteria: SortCriteria;

  @Output()
  selectPerson = new EventEmitter<Person>();

  @Output()
  sortPeople = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  getSortIndicator( fieldName ) {
    if ( fieldName === this.sortCriteria.sortField ) {
      return this.sortCriteria.ascending ? 'sort-asc' : 'sort-desc';
    }

    return 'sort-none';
  }

  handleClick( person: Person ) {
    this.selectPerson.emit( person );
  }

  handleHeaderClick( sortField: string ) {
    this.sortPeople.emit( sortField );
  }

}
