import { Component, OnInit } from '@angular/core';
import { Payee } from '../Payee';

@Component( {
  selector: 'payees-manager',
  templateUrl: './payees-manager.component.html',
  styles: []
} )
export class PayeesManagerComponent implements OnInit {

  payee: Payee;

  constructor() { }

  ngOnInit() {
    setTimeout( () => ( this.payee = {
      id: '23',
      version: 1,
      payeeName: 'Goodman, Lieber, Kurtzberg, Holliway',
      categoryId: '1',
      address: {
        street: '16 W 12 St.',
        city: 'New York',
        state: 'NY',
        zip: '10015'
      },
      image: '/images/animals/9.jpg',
      motto: null,
      active: true
    } ), 2000 );
  }

}
