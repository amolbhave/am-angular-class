import { Component, Input, OnInit, OnChanges, SimpleChanges, DoCheck } from '@angular/core';
import { Payee } from '../Payee';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component( {
  selector: 'payee-detail',
  templateUrl: './payee-detail.component.html',
  styles: []
} )
export class PayeeDetailComponent implements OnInit, OnChanges, DoCheck {

  counter = 0;

  @Input()
  payee: Payee;

  constructor(private route: ActivatedRoute) {
    console.log('PayeeDetailComponent.constructor()');
  }

  ngOnInit() {
    console.log('PayeeDetailComponent.ngOnInit(): ', this.payee);
    if (!this.payee) {
      this.route.data.subscribe((data: {payee: Payee}) => this.payee = data.payee);
    }
  }

  ngOnChanges(changes: SimpleChanges) {
/*
    console.log('Changed! ', changes);
    console.log( 'OnChanges: this.payee: ', this.payee );

    if (changes['payee']) {
      const changePayee = changes['payee'];
      if (changePayee.currentValue !== changePayee.previousValue) {

      }
    }
*/
  }

  ngDoCheck(): void {
/*
    console.log('DoCheck ran ', ++this.counter, ' times');
    console.log('DoCheck() this.payee: ', this.payee);
*/
  }

}
