import { Component, Input, OnInit } from '@angular/core';
import { Person } from '../../people/Person';
import { PeopleLocalDAOService } from '../people-local-dao.service';

@Component( {
  selector: 'iterating-data',
  template: `
    <div>
      <h2>Iterating over data</h2>
      <p>When it loads, a list of people should appear below:</p>
      <people-lister [people]="people"></people-lister>
    </div>`,
  styles: []
} )
export class IteratingDataComponent implements OnInit {

  people: Person[];

  constructor( private dao: PeopleLocalDAOService ) { }

  ngOnInit() {
    this.dao.query()
        .then( people => this.people = people );
  }

}

@Component( {
  selector: 'people-lister',
  template: `<h3>People Lister</h3>
  <ul *ngIf="people">
    <li *ngFor="let person of people">{{ person.firstName }} {{ person.lastName }}</li>
  </ul>
  `
} )
export class DemoPeopleListerComponent {
  @Input()
  people: Person[];

}
