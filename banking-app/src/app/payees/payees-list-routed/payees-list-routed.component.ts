import { Component, OnDestroy, OnInit } from '@angular/core';
import { Payee } from '../Payee';
import { Subscription } from 'rxjs';
import { SortCriteria } from '../payees-types';
import { PayeesDAOService } from '../../core/payees-dao.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component( {
  selector: 'payees-list-routed',
  templateUrl: './payees-list-routed.component.html',
  styles: []
} )
export class PayeesListRoutedComponent implements OnInit, OnDestroy {

  params: Params;
  payees: Payee[] = [];
  displayPayees: Payee[] = [];
  lastSubscription: Subscription;
  sortCriteria: SortCriteria = {
    sortField: '',
    ascending: true
  };

  constructor( private dao: PayeesDAOService,
               private router: Router,
               private route: ActivatedRoute ) { }

  handleData( payees ) {
    this.payees = payees;
    this.displayPayees = [ ...payees ] as Payee[];
  }

  handleSelectPayee( payee: Payee ) {
    console.log( 'handleSelectPayee(): ', payee );
    this.router.navigate( [ 'payees/detail', payee.id ] );
  }

  handleSortPayees( sortField: string ) {
    console.log( 'PayeesManagerComponent.handleSortPayees(): ', sortField );
    if ( this.sortCriteria.sortField === sortField ) {
      this.sortCriteria.ascending = !this.sortCriteria.ascending;
    } else {
      this.sortCriteria = {
        sortField,
        ascending: true
      };
    }

    this.dao.listWithCriteria( this.sortCriteria )
        .subscribe( payees => {
          this.payees = payees;
          this.displayPayees = [ ...payees ];
        } );
  }

  ngOnInit() {
    this.route.queryParams.subscribe( ( params: Params ) => {
      console.log( `PayeesListRouted: Searching on ${params.payeeName}` );

      if ( params.payeeName ) {
        this.params = params;
        this.lastSubscription = this.dao
                                    .search( params.payeeName )
                                    .subscribe( payees => this.handleData( payees ) );
      } else {
        this.lastSubscription = this.dao.list()
                                    .subscribe( payees => this.handleData( payees ) );
      }
    } );
  }

  ngOnDestroy() {
    this.lastSubscription.unsubscribe();
  }

}
