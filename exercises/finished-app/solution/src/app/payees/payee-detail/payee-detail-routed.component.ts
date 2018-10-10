import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PayeesDAOService } from '../../core/payees-dao.service';
import { Payee } from '../Payee';

@Component({
  selector: 'payee-detail-routed',
  template: `<payee-detail [payee]="payee"></payee-detail>`,
  styles: []
})
export class PayeeDetailRoutedComponent implements OnInit {

  payee: Payee;

  constructor(private route: ActivatedRoute,
    private dao: PayeesDAOService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(map => {
      this.dao.get(map.get('id'))
        .subscribe(payee => this.payee = payee);
    });
  }

}
