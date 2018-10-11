import { Component, Input, OnInit } from '@angular/core';
import { Payee } from '../Payee';

@Component( {
  selector: 'payees-list',
  templateUrl: './payees-list.component.html',
  styles: []
} )
export class PayeesListComponent implements OnInit {

  @Input()
  payees: Payee[];

  constructor() { }

  ngOnInit() {
  }

}
