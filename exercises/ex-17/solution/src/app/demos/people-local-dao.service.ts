import { Injectable } from '@angular/core';
import { people } from '../../data/people';
import { Person } from '../people/Person';
import * as _ from 'lodash';

@Injectable( {
  providedIn: 'root'
} )
export class PeopleLocalDAOService {
  people: Person[] = people;

  constructor() { }

  query( criteria = {} ) {
    return Promise.resolve( _.filter( this.people, _.matches( criteria ) ) );
  }

  findById( id ) {
    return Promise.resolve( _.find( this.people, person => person.id === id ) );
  }
}
