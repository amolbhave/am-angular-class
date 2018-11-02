import { Directive, ElementRef, Host, HostBinding, Input, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

@Directive( {
  selector: '[showValidation]'
} )
export class ShowValidationDirective implements OnInit {

  // tslint:disable:no-input-rename
  @Input( 'showValidation' )
  model: NgModel;

/*
  @HostBinding('validationMessages')
  validationMessages;
*/

  constructor(private el: ElementRef) { }

  ngOnInit() {
    console.log( 'on init ran: ', this.model );
    this.model.valueChanges.subscribe( change => {
      console.log( 'model change: ', change );
      this.onModelChange();
    } );
  }
  onModelChange() {
    console.log( 'Directive model: ', this.model );
    if (this.model.invalid && (this.model.touched || this.model.dirty)) {
      this.el.nativeElement.style.visibility = 'visible';
      // this.validationMessages.street = 'Street has problems.';
    } else {
      this.el.nativeElement.style.visibility = 'hidden';
    }
  }

}
