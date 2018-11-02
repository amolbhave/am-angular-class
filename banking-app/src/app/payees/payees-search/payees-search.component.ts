import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component( {
  selector: 'payees-search',
  templateUrl: './payees-search.component.html',
  styles: []
} )
export class PayeesSearchComponent implements OnInit {

  searchPayeeName = '';

  constructor( private router: Router,
               private route: ActivatedRoute ) { }

  handleSearch( dataSource: string ) {
    const destination = dataSource === 'dao' ? 'list' : 'list-resolved';

    this.router.navigate( [ `../${destination}` ], {
      relativeTo: this.route,
      queryParams: {
        payeeName: this.searchPayeeName
      }
    } );
  }

  ngOnInit() {
  }

}
