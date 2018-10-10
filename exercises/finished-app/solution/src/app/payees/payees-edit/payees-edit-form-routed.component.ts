import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { PayeesDAOService } from '../../core/payees-dao.service';

@Component( {
  selector: 'payees-edit-form-routed',
  template: `
    <h3>You want to edit payee number {{ editPayeeId }}</h3>
    <!--<payees-edit></payees-edit>-->
  `,
  styles: []
} )
export class PayeesEditFormRoutedComponent implements OnInit {

  editPayeeId: string;

  constructor( private route: ActivatedRoute,
               private dao: PayeesDAOService ) { }

  ngOnInit() {
    this.route.paramMap.subscribe( ( params: ParamMap ) => {
      this.editPayeeId = params.get( 'id' );
    } );
  }

}
