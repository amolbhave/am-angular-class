import { Component, OnInit } from '@angular/core';

// import Payee from Payee.ts
import { Payee } from '../Payee';

@Component({
  selector: 'payees-manager',
  templateUrl: './payees-manager.component.html',
  styles: []
})
export class PayeesManagerComponent implements OnInit {

  // Create a Payee with the appropriate data
  // Make it available to the template, then edit payees-manager.component.html
  // You can always visit http://localhost:8000/payees/23 for an example
  payee: Payee = {
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
  };

  constructor() { }

  ngOnInit() {
  }

}
