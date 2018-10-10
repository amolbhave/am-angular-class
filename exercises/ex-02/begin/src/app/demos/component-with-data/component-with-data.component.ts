import { Component, OnInit } from '@angular/core';
import { Transaction } from '../../transactions/Transaction';

/* tslint:disable:no-trailing-whitespace */

@Component( {
  selector: 'component-with-data',
  template: `<h1>Transaction Detail Component</h1>
  <ul>
    <li>Transaction id: {{ tx.id }}</li>
    <li>Payee Name: {{ tx.payeeName }}</li>
    <li>Amount: {{ tx.amount | currency:'USD':true }}</li>
    <li>Date: {{ tx.txDate | date:'yyyy-MM-dd' }}</li>
  </ul>`,
  styles: []
} )
export class ComponentWithDataComponent implements OnInit {

  tx: Transaction = {
    'id': '1',
    'version': 1,
    'payeeId': '17',
    'payee': {
      'payeeName': 'Bauch-Stehr Medical Partners'
    },
    'personId': '101',
    'amount': -97.74,
    'txType': 'Debit',
    'txStatus': 'Cleared',
    'txDate': '2015-01-04T23:50:19.938',
    'accountId': '1',
    'categoryId': '8',
    'categoryName': 'Health',
  };

  constructor() { }

  ngOnInit() {
    console.log( 'ComponentWithDataComponent init' );
  }

}
