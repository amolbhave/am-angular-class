import { Component, OnInit } from '@angular/core';
import { Transaction } from '../../transactions/Transaction';

/* tslint:disable:no-trailing-whitespace */

@Component( {
  template: `<h2>Demo: Conditionally displaying data</h2>
  <ul *ngIf="tx">
    <li>Transaction id: {{ tx.id }}</li>
    <li>Payee Name: {{ tx.payee.payeeName }}</li>
    <li *ngIf="tx.category.categoryName">Category: {{ tx.category.categoryName }}</li>
    <li>Amount: {{ tx.amount | currency:'USD':'symbol' }}</li>
    <li>Date: {{ tx.txDate | date:'yyyy-MM-dd' }}</li>
  </ul>`
} )
export class DemoNgIfComponent implements OnInit {
  tx: Transaction;

  constructor() { /* No code here */ }

  ngOnInit() {
    setTimeout( () => {
      this.tx = {
        id: '1',
        version: 1,
        payeeId: '17',
        payee: {
          payeeName: 'Bauch-Stehr Medical Partners'
        },
        personId: '101',
        amount: -97.74,
        txType: 'Debit',
        txStatus: 'Cleared',
        txDate: '2015-01-04T23:50:19.938',
        accountId: '1',
        categoryId: '8',
        category: {
          categoryName: 'Health',
          categoryType: 'expense',
          id: '5',
          version: 1
        }

      };
    }, 1000 );
  }
}
