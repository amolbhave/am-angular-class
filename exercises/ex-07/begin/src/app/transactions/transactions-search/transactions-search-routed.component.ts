import { Component, OnInit } from '@angular/core';
import { TransactionsSearchCriteria } from './transactions-search.component';
import { TransactionsDAOService } from '../../core/transactions-dao.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component( {
  selector: 'transactions-search-routed',
  template: `
    <transactions-search
      (searchTransactions)="handleSearchTransactions($event)">
    </transactions-search>
  `,
  styles: []
} )
export class TransactionsSearchRoutedComponent implements OnInit {

  constructor( private dao: TransactionsDAOService,
               private router: Router,
               private route: ActivatedRoute ) { }

  ngOnInit() {
  }

  handleSearchTransactions( criteria: TransactionsSearchCriteria ) {
    const queryParams = this.dao.betterCriteriaToParams( criteria );
    this.router.navigate( [ '../list' ],
      { relativeTo: this.route, queryParams } );
  }

}
