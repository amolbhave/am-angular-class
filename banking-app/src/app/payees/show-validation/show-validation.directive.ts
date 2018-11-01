import { Directive, Input, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

@Directive( {
  selector: '[showValidation]'
} )
export class ShowValidationDirective implements OnInit {

  // tslint:disable:no-input-rename
  @Input( 'showValidation' )
  model: NgModel;

  constructor() { }

  ngOnInit() {
    console.log( 'on init ran: ', this.model );
    this.model.valueChanges.subscribe( change => console.log( 'model change: ', change ) );
  }
  onModelChange() {
    console.log( 'Directive model: ', this.model );
  }

}
