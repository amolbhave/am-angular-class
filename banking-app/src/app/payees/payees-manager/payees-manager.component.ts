import { Component, OnDestroy, OnInit } from '@angular/core';
import { Payee } from '../Payee';
import { Observable } from 'rxjs';
import { PayeeViews } from '../payees-types';

@Component( {
  selector: 'payees-manager',
  templateUrl: './payees-manager.component.html',
  styles: [ '.show {display: block}',
            ' .hide { display: none }' ]
} )
export class PayeesManagerComponent implements OnInit, OnDestroy {

  currentView = PayeeViews.LIST;

  payees: Payee[] = [];
  selectedPayee: Payee;
  constructor() { }

  showView( viewName: PayeeViews ): string {
    return viewName === this.currentView ? 'show' : 'hide';
  }

  handleBack() {
    this.currentView = PayeeViews.LIST;
  }

  handleClick( direction: string ) {
    const currentPosition = this.payees.indexOf( this.selectedPayee );
    const amount = direction === 'Previous' ? -1 : 1;

    let nextPosition = currentPosition + amount;
    if ( nextPosition > this.payees.length - 1 ) {
      nextPosition = 0;
    } else if ( nextPosition < 0 ) {
      nextPosition = this.payees.length - 1;
    }

    this.selectedPayee = this.payees[ nextPosition ];
  }

  ngOnInit() {

  }

  ngOnDestroy() {

  }

}
