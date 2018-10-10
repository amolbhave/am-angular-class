import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Transaction } from '../Transaction';

@Component( {
  selector: 'transactions-list',
  templateUrl: './transactions-list.component.html',
  styles: []
} )
export class TransactionsListComponent implements OnInit {
  @Output()
  selectTransaction = new EventEmitter<Transaction>();

  @Input()
  transactions: Transaction[];

  handleClick( tx: Transaction ) {
    this.selectTransaction.emit( tx );
  }

  constructor() { }

  ngOnInit() {
  }

}
