import { Component, OnInit } from '@angular/core';
import { Person } from '../Person';
import { SortCriteria } from '../../payees/payees-types';
import { PeopleDAOService } from '../../core/people-dao.service';
import { PayeesDAOService } from '../../core/payees-dao.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Payee } from '../../payees/Payee';

@Component( {
  selector: 'people-list-routed',
  template: `
    <people-list
      (selectPerson)="handleSelectPerson($event)"
      (sortPeople)="handleSortPeople($event)"
      [people]="displayPeople"
      [sortCriteria]="sortCriteria"
    ></people-list>
  `,
  styles: []
} )
export class PeopleListRoutedComponent implements OnInit {

  people: Person[];
  displayPeople: Person[];
  sortCriteria: SortCriteria = {
    sortField: '',
    ascending: true
  };

  constructor( private dao: PeopleDAOService,
               private router: Router,
               private route: ActivatedRoute ) { }

  ngOnInit() {
    this.route.queryParams.subscribe( ( params: Params ) => {
      this.dao
          .search( params )
          .subscribe( people => this.handleData( people ) );
    } );
  }

  handleData( people ) {
    this.people = people;
    this.displayPeople = [ ...people ] as Person[];
  }

  handleSelectPerson( person: Person ) {
    this.router.navigate( [ 'people/edit', person.id ] );
  }

  handleSortPeople( sortField: string ) {
    if ( this.sortCriteria.sortField === sortField ) {
      this.sortCriteria.ascending = !this.sortCriteria.ascending;
    } else {
      this.sortCriteria = {
        sortField,
        ascending: true
      };
    }

    console.log( this.sortCriteria );

    this.dao.search( null, this.sortCriteria )
        .subscribe( people => {
          this.people = people;
          this.displayPeople = [ ...people ];
        } );
  }
}
