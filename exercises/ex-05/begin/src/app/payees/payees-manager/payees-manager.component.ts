// Import OnInit
import { Component } from '@angular/core';
import { Payee } from '../Payee';

@Component({
  selector: 'payees-manager',
  templateUrl: './payees-manager.component.html',
  styles: []
})
export class PayeesManagerComponent {
  // Tell the class, above, that you will be implementing OnInit

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

  // implement the ngOnInit method here
  // Then move the initialization of payee to this method
  // (The declaration should remain above)
  // Then go to the template

}
