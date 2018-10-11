import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'transactions-manager',
  templateUrl: './transactions-manager.component.html',
  styles: []
})
export class TransactionsManagerComponent implements OnInit {

  constructor( private route: ActivatedRoute ) {
    console.log( 'TxManagerComponent.data constructed' );
  }

  ngOnInit() {
    this.route.paramMap
        .subscribe( ( params: ParamMap ) => {
          console.log( 'Account: ', params.get( 'account' ) );
        } );
  }

}
