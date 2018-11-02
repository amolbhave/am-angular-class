import { Component, OnInit } from '@angular/core';
import { PeopleDAOService } from '../../core/people-dao.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Person } from '../Person';

@Component( {
  selector: 'person-edit',
  template: `
    <people-form [person]="person"></people-form>
  `,
  styles: []
} )
export class PersonEditComponent implements OnInit {
  person: Person;

  constructor( private dao: PeopleDAOService,
               private route: ActivatedRoute ) { }

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap( ( params: ParamMap ) => {
        console.log( params );
        return this.dao.get( params.get( 'id' ) );
      } )
    )
        .subscribe( ( person: Person ) => {
          this.person = person;
        } );

  }

}
