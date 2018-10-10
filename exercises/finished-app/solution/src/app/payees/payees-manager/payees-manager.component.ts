import { Component, OnInit } from '@angular/core';
import { PayeeSearchCriteria } from '../payees-search/payees-search.component';
import { PayeesDAOService } from '../../core/payees-dao.service';
import { Payee } from '../Payee';
import { Router } from '@angular/router';

@Component({
  selector: 'payees-manager',
  templateUrl: './payees-manager.component.html',
  styles: [`
  .hide { display: none; }
  .show { display: block; }
  `]
})
export class PayeesManagerComponent implements OnInit {

  showSearch = true;
  showList = false;
  results: Payee[];

  // hideList = true;
  // hideSearch = false;

  constructor( private dao: PayeesDAOService, private router: Router) { }

  ngOnInit() {
  }

  navigateToSearch() {
    this.router.navigate(['payees', 'search']);
  }

  handleSearchPayees(criteria: PayeeSearchCriteria) {
    console.log('Criteria received: ', criteria);
    const obs = this.dao.search(criteria);
    obs.subscribe(results => {
      this.results = results;
      this.handleSelectView('List');
    });
  }

  handleSelectView(whichView) {
    console.log('You clicked on ' + whichView);
    if (whichView === 'List') {
      [this.showList, this.showSearch] = [this.showSearch, this.showList];

      // this.showList = true;
      // this.showSearch = false;
      // this.hideSearch = true;
      // this.hideList = false;
    } else {
      this.showList = false;
      this.showSearch = true;
      // this.hideList = true;
      // this.hideSearch = false;
    }
  }

}
