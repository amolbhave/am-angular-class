import { Component, Input, OnInit } from '@angular/core';
import { Person } from '../../people/Person';
import { PeopleLocalDAOService } from '../people-local-dao.service';

@Component({
  selector: 'track-by',
  template: `<div>
    <h2>Iterating over data (with custom track-by)</h2>
    <p>When it loads, a list of people should appear below:</p>
    <track-by-lister [people]="people"></track-by-lister>
  </div>`,
  styles: []
})
export class TrackByComponent implements OnInit {

  people: Person[];

  constructor( private dao: PeopleLocalDAOService ) { }

  ngOnInit() {
    this.dao.query()
        .then( people => this.people = people );
  }

}

@Component( {
  selector: 'track-by-lister',
  template: `<h3>People Lister</h3>
  <ul *ngIf="people">
    <li *ngFor="let person of people; trackBy:customTrackBy">{{ person.firstName }} {{ person.lastName }}</li>
  </ul>
  `
} )
export class DemoTrackByListerComponent {
  @Input()
  people: Person[];

  customTrackBy(index, person: Person) {
    // A reasonably unique value
    return `${person.id}-${person.version}`;
  }
}
