import { Component, Input, OnInit } from '@angular/core';
import { Person } from '../Person';

@Component( {
  selector: 'people-form',
  templateUrl: './people-form.component.html',
  styles: []
} )
export class PeopleFormComponent implements OnInit {

  @Input()
  person: Person;

  actionLabel: string;

  constructor() { }

  ngOnInit() {
  }

}
