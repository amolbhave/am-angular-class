import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Person } from '../../people/Person';
import { PeopleLocalDAOService } from '../people-local-dao.service';
import { filter } from 'lodash';

interface PersonFilter {
  firstName?: string;
  lastName?: string;
}

@Component( {
  selector: 'advanced-filtering',
  template: `
    <div>
      <h2>Filtering data</h2>
      <p>When it loads, a list of people should appear below. <br>
        Use the form to filter the people</p>
      <div class="row">
        <div class="col">
          <filter-form (updateCriteria)="handleUpdateFilter($event)"></filter-form>
        </div>
        <div class="col">
          <filtered-lister [people]="filteredPeople" (updateFilter)="handleSelectPerson($event)"></filtered-lister>
        </div>
      </div>
    </div>`,
  styles: []
} )
export class AdvancedFilteringComponent implements OnInit {

  people: Person[];
  filteredPeople: Person[];
  criteria: PersonFilter;

  constructor( private dao: PeopleLocalDAOService ) { }

  ngOnInit() {
    this.dao.query()
        .then( people => {
          this.people = people;
          this.filteredPeople = [ ...people ];
        } );
  }

  handleUpdateFilter( criteria: PersonFilter ) {
    const matchers = {};
    const criteriaKeys = Object.keys( criteria );
    criteriaKeys.forEach( key => matchers[ key ] = new RegExp( criteria[ key ], 'i' ) );

    this.filteredPeople = this.people.filter( person => {
      return criteriaKeys.every( key => person[key] && matchers[key].test(person[key]) );
    } );
  }

}

@Component( {
  selector: 'filtered-lister',
  template: `<h3>People Lister</h3>
  <ul *ngIf="people">
    <li *ngFor="let person of people; trackBy:customTrackBy">{{ person.firstName }} {{ person.lastName }}
    </li>
  </ul>
  `
} )
export class FilteredListerComponent {
  @Input()
  people: Person[];

  customTrackBy( index, person: Person ) {
    // A reasonably unique value
    return `${person.id}-${person.version}`;
  }
}

@Component( {
  selector: 'filter-form',
  template: `
    <form>
      <div class="form-group">
        <label for="first-name">First Name:</label>
        <input [(ngModel)]="criteria.firstName"
               (ngModelChange)="handleModelChange(criteria.firstName)"
               type="text"
               name="personFirstName"
               id="first-name"
               class="form-control">
      </div>
      <div class="form-group">
        <label for="last-name">Last Name:</label>
        <input [(ngModel)]="criteria.lastName" (ngModelChange)="handleModelChange(criteria.lastName)"
               type="text" name="personLastName" id="last-name" class="form-control">
      </div>
    </form>`
} )
export class FilterFormComponent {
  criteria: PersonFilter = {};

  @Output()
  updateCriteria = new EventEmitter<PersonFilter>();

  handleModelChange() {
    this.updateCriteria.emit( this.criteria );
  }
}

