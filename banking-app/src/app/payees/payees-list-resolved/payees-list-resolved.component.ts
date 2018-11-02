import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Payee } from '../Payee';
import { SortCriteria } from '../payees-types';

@Component( {
  selector: 'payees-list-resolved',
  template: `
    <payees-list
      [payees]="payees"
      [sortCriteria]="sortCriteria"
      (selectPayee)="handleSelectPayee($event)"
      (sortPayees)="handleSortPayees($event)"
    ></payees-list>
  `,
  styles: []
} )
export class PayeesListResolvedComponent implements OnInit {

  payees: Payee[];
  sortCriteria: SortCriteria = {
    sortField: '',
    ascending: true
  };

  constructor( private route: ActivatedRoute,
               private router: Router ) { }

  ngOnInit() {
    this.route.data.subscribe( ( data: { payees: Payee[] } ) => {
      this.payees = data.payees;
    } );
  }

  handleSelectPayee( payee: Payee ) {
    console.log( 'handleSelectPayee(): ', payee );
    this.router.navigate( [ 'payees/detail', payee.id ] );
  }

  handleSortPayees( sortField: string ) {
    if ( this.sortCriteria.sortField === sortField ) {
      this.sortCriteria.ascending = !this.sortCriteria.ascending;
    } else {
      this.sortCriteria = {
        sortField,
        ascending: true
      };
    }

    this.router.navigate( [ `../${this.route.routeConfig.path}` ], {
      relativeTo: this.route,
      queryParamsHandling: 'merge',
      queryParams: {
        _sort: this.sortCriteria.sortField,
        _order: this.sortCriteria.ascending ? 'asc' : 'desc'
      }
    } );
  }

}
