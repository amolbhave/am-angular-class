import { Component, OnInit } from '@angular/core';
import { PayeesDAOService } from '../../core/payees-dao.service';
import { ActivatedRoute } from '@angular/router';
import { Payee } from '../Payee';

@Component( {
  selector: 'payees-detail-routed',
  templateUrl: './payees-detail-routed.component.html',
  styles: []
} )
export class PayeesDetailRoutedComponent implements OnInit {

  selectedPayee: Payee;

  constructor( private dao: PayeesDAOService, private route: ActivatedRoute ) { }

  ngOnInit() {
    this.route.paramMap.subscribe( map => this.getPayee( map.get( 'id' ) ) );
  }

  getPayee( payeeId ) {
    this.dao.get( payeeId )
        .subscribe( payee => this.selectedPayee = payee );
  }

}
