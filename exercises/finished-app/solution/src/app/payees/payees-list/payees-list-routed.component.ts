import { Component, OnInit } from '@angular/core';
import { PayeesDAOService } from '../../core/payees-dao.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Payee } from '../Payee';

@Component({
  selector: 'payees-list-routed',
  template: `
  <payees-list [payees]="results"
  (selectPayee)="handleSelectPayee($event)"
  (editPayee)="handleEditPayee($event)"
  ></payees-list>
  `,
  styles: []
})
export class PayeesListRoutedComponent implements OnInit {

  results: Payee[];

  constructor(private dao: PayeesDAOService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParamMap.subscribe((params: ParamMap) => {
      console.log('Keys: ', params.keys);
      this.dao.paramSearch(params)
        .subscribe(results => {
          console.log({ results });
          this.results = results;
        });
    });
  }

  handleEditPayee(selectedPayee: Payee) {
    this.router.navigate(['../edit', selectedPayee.id],
      { relativeTo: this.route });
  }

  handleSelectPayee(selectedPayee: Payee) {
    this.router.navigate(['../detail', selectedPayee.id],
      { relativeTo: this.route });
  }
}
