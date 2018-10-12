import { Component, Input, OnInit, OnChanges, SimpleChanges, EventEmitter, Output } from '@angular/core';
import { Payee } from '../Payee';
import { CategoryLookupService } from '../../core/category-lookup.service';

@Component( {
  selector: 'payee-detail',
  templateUrl: './payee-detail.component.html',
  styles: [ `.categoryIncome {
    background-color: green;
    color: white
  }`
  ]
} )
export class PayeeDetailComponent implements OnInit, OnChanges {

  @Input()
  payee: Payee;

  @Output()
  onNextPayee = new EventEmitter<number>();

  @Output()
  onPreviousPayee = new EventEmitter<number>();

  @Output()
  goBack = new EventEmitter<any>();

  constructor( private lookup: CategoryLookupService ) { }

  ngOnInit() {
    if ( this.payee && !this.payee.category ) {
      this.payee = this.enrichPayee( this.payee );
    }
  }

  ngOnChanges( changes: SimpleChanges ) {
    if ( changes[ 'payee' ] && !changes[ 'payee' ].currentValue.category ) {
      changes[ 'payee' ].currentValue = this.enrichPayee( changes[ 'payee' ].currentValue );
    }
  }

  fireNext() {
    this.onNextPayee.emit( 1 );
  }

  firePrevious() {
    this.onNextPayee.emit( -1 );
  }

  fireBack() {
    this.goBack.emit();
  }

  enrichPayee( payee ) {
    if ( !payee.category ) {
      payee.category = this.lookup.findCategory( payee.categoryId );
    }

    return payee;
  }

  getStateColor( state ) {
    const style = {
      color: 'black'
    };
    if ( state === 'NJ' ) {
      style.color = 'red';
    } else if ( state === 'CA' ) {
      style.color = 'green';
    }

    return style;
  }

  getCardColor( categoryId ) {
    const classes = [];
    if ( categoryId < 100 ) {
      classes.push( 'bg-warning', 'text-success' );
    } else if ( [ '106', '107' ].includes( categoryId ) ) {
      classes.push( 'bg-light', 'text-dark' );
    } else if ( categoryId === '105' ) {
      classes.push( 'bg-danger', 'text-light' );
    }

    return classes;
  }

}
