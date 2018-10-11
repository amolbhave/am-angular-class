import { Component, Input, OnInit } from '@angular/core';
import {Transaction} from '../Transaction';

@Component({
  selector: 'transaction-detail',
  templateUrl: './transaction-detail.component.html',
  styles: []
})
export class TransactionDetailComponent implements OnInit {

  @Input()
  displayTx: Transaction;

  constructor() { }

  ngOnInit() {
  }

}
