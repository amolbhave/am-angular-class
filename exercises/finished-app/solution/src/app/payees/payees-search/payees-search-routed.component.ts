import { Component, OnInit } from '@angular/core';
import { PayeeSearchCriteria } from './payees-search.component';
import { PayeesDAOService } from '../../core/payees-dao.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'payees-search-routed',
  template: `
  <payees-search
    (searchPayees)="handleSearchPayees($event)">
  </payees-search>
  `,
  styles: []
})
export class PayeesSearchRoutedComponent implements OnInit {

  constructor(private dao: PayeesDAOService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
  }

  handleSearchPayees(criteria: PayeeSearchCriteria) {
    const queryParams = this.dao.betterCriteriaToParams(criteria);
    this.router.navigate(['../list'],
    { relativeTo: this.route, queryParams });
  }

}
