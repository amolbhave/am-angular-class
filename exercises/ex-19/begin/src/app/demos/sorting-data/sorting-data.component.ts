import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Person } from '../../people/Person';
import { PeopleLocalDAOService } from '../people-local-dao.service';
import { sortBy } from 'lodash';

@Component( {
  selector: 'sorting-data',
  template: `
    <div>
      <h2>Sorting data (people, specifically)</h2>
      <p>When it loads, a list of people should appear below. <br>
        Click on a person to reveal their details</p>
      <div class="row">
        <div class="col">
          <span>Sort by:</span>
          <ul class="list-inline">
            <li class="list-inline-item" (click)="handleSort('firstName')">First name</li>
            <li class="list-inline-item" (click)="handleSort('lastName')">Last name</li>
          </ul>
          <sortable-lister [people]="people" (selectPerson)="handleSelectPerson($event)"></sortable-lister>
        </div>
        <div class="col">
          <sortable-details *ngIf="selectedPerson" [person]="selectedPerson"></sortable-details>
        </div>
      </div>
    </div>`,
  styles: []
} )
export class SortingDataComponent implements OnInit {

  people: Person[];
  selectedPerson: Person;

  constructor( private dao: PeopleLocalDAOService ) { }

  ngOnInit() {
    this.dao.query()
        .then( people => this.people = people );
  }

  handleSelectPerson( person: Person ) {
    this.selectedPerson = person;
  }

  handleSort( field: string ) {
    this.people = sortBy( this.people, field );
  }

}

@Component( {
  selector: 'sortable-lister',
  template: `<h3>People Lister</h3>
  <ul *ngIf="people">
    <li *ngFor="let person of people; trackBy:customTrackBy"
        (click)="handleClick(person)">{{ person.firstName }} {{ person.lastName }}
    </li>
  </ul>
  `
} )
export class SortablePeopleListerComponent {
  @Input()
  people: Person[];

  @Output()
  selectPerson = new EventEmitter<Person>();

  customTrackBy( index, person: Person ) {
    // A reasonably unique value
    return `${person.id}-${person.version}`;
  }

  handleClick( selectedPerson: Person ) {
    this.selectPerson.emit( selectedPerson );
  }
}

@Component( {
  selector: 'sortable-details',
  template: `
    <h3>Person details</h3>
    <div class="card">
      <div class="card-header">{{ person.firstName }} {{ person.lastName }}</div>
      <ul class="list-group">
        <li class="list-group-item">{{ person.firstName }} {{ person.lastName }}</li>
        <li class="list-group-item">Born on: {{ person.dateOfBirth}}</li>
        <li class="list-group-item">{{ person.address.city }} {{ person.address.state }}</li>
      </ul>
    </div>`
} )
export class SortablePersonDetailComponent {
  @Input()
  person: Person;
}

