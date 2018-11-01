import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component( {
  selector: 'payees-search',
  templateUrl: './payees-search.component.html',
  styles: []
} )
export class PayeesSearchComponent implements OnInit {

  searchPayeeName = '';

  constructor( private router: Router ) { }

  handleSearch() {
    console.log( `Searching on ${this.searchPayeeName}` );
    this.router.navigate( [ 'payees/list' ], {
      queryParams: {
        payeeName: this.searchPayeeName
      }
    } );
  }

  ngOnInit() {
  }

}
