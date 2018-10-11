import { Component, OnInit, Input } from '@angular/core';
import { PeopleLocalDAOService } from '../people-local-dao.service';
import { Person } from '../../people/Person';

@Component( {
  selector: 'passing-data',
  template: `
    <div>
      <h2>This is the parent component</h2>
      <demo-child [childPeople]="parentPeople"></demo-child>
    </div>`,
  styles: []
} )
export class PassingDataComponent implements OnInit {

  parentPeople: Person[];

  constructor( private dao: PeopleLocalDAOService ) { }

  ngOnInit() {
    this.dao.query()
        .then( ( people: Person[] ) => this.parentPeople = people );
  }
}

@Component( {
  selector: 'demo-child',
  template: `
    <div>
      <h3>This is the child component</h3>
      <p *ngIf="childPeople">There are {{ childPeople.length }} people</p>
    </div>`
} )
export class DemoChildComponent {
  @Input()
  childPeople: Person[];

  constructor() {}
}
