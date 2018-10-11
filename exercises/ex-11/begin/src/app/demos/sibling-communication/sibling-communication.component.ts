import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Person } from '../../people/Person';
import { PeopleLocalDAOService } from '../people-local-dao.service';

@Component( {
  selector: 'sibling-communication',
  template: `
    <div>
      <h2>Sibling Communication</h2>
      <p>When it loads, a list of people should appear below. <br>
        Click on a person to reveal their details</p>
      <div class="row">
        <div class="col">
          <sc-lister [people]="people" (selectPerson)="handleSelectPerson($event)"></sc-lister>
        </div>
        <div class="col">
          <sc-details *ngIf="selectedPerson" [person]="selectedPerson"></sc-details>
        </div>
      </div>
    </div>`,
  styles: []
} )
export class SiblingCommunicationComponent implements OnInit {

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

}

@Component( {
  selector: 'sc-lister',
  template: `<h3>People Lister</h3>
  <ul *ngIf="people">
    <li *ngFor="let person of people; trackBy:customTrackBy"
        (click)="handleClick(person)">{{ person.firstName }} {{ person.lastName }}
    </li>
  </ul>
  `
} )
export class SiblingCommunicationPeopleListerComponent {
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
  selector: 'sc-details',
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
export class SiblingCommunicationPersonDetailComponent {
  @Input()
  person: Person;
}

