import { Component, OnInit } from '@angular/core';
import { TransactionsDAOService } from '../../core/transactions-dao.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Transaction } from '../Transaction';

@Component( {
  selector: 'transactions-list-routed',
  template: `
    <transactions-list [transactions]="results"
                       (selectTransaction)="handleSelectTransaction($event)"
                       (editTransaction)="handleEditTransaction($event)"
    ></transactions-list>
  `,
  styles: []
} )
export class TransactionsListRoutedComponent implements OnInit {

  results: Transaction[];

  constructor( private dao: TransactionsDAOService,
               private router: Router,
               private route: ActivatedRoute ) { }

  ngOnInit() {
    this.route.queryParamMap.subscribe( ( params: ParamMap ) => {
      console.log( 'Keys: ', params.keys );
      this.dao.paramSearch( params )
          .subscribe( results => {
            console.log( { results } );
            this.results = results;
          } );
    } );
  }

  handleEditTransaction( selectedTransaction: Transaction ) {
    this.router.navigate( [ '../edit', selectedTransaction.id ],
      { relativeTo: this.route } );
  }

  handleSelectTransaction( selectedTransaction: Transaction ) {
    this.router.navigate( [ '../detail', selectedTransaction.id ],
      { relativeTo: this.route } );
  }
}
