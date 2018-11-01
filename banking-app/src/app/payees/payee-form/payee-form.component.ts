import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { PayeeForm } from '../payees-types';
import { Category } from '../../categories/Category';
import * as _ from 'lodash';
import { flatten } from 'flat';
import { Payee } from '../Payee';

@Component( {
  selector: 'payee-form',
  templateUrl: './payee-form.component.html',
  styles: [  ]
} )
export class PayeeFormComponent implements OnInit {

  validationMessages = {};
  payeeModel: PayeeForm = {};
  counter = 0;

  @Output()
  submitPayee = new EventEmitter<PayeeForm>();

  @Input()
  payee: PayeeForm | Payee;

  constructor() {
    this.counter += 1;
  }

  ngOnInit() {
    this.counter += 1;
  }

  handlePickCategory( category: Category ) {
    this.payeeModel.category = category;
    this.payeeModel.categoryId = category.id;
  }

  handleSubmit( form: NgForm ) {
    const flatPayee = flatten( this.payee, { delimiter: '_' } );
    const keys = [ ...Object.keys( form.value ), ...Object.keys( flatPayee ) ];

    keys.forEach( ( key: string ) => {
      // Takes care of 'address_city' et al
      _.set( this.payeeModel, key.split( '_' ), ( form.value[ key ] || this.payee[ key ] ) );
    } );

    if ( !this.payeeModel.active ) {
      this.payeeModel.active = false;
    }
  }

  getButtonStyles( model: NgModel ) {
    return {
      'btn-primary': model.valid || ( model.pristine || model.untouched ),
      'btn-danger': ( ( model.dirty || model.touched ) && model.invalid ),
      'disabled': model.invalid
    };

  }

  showValidationMessage( model: NgModel ): object {
    const style = { visibility: 'hidden' };
    if ( ( model.dirty || model.touched ) && model.invalid ) {
      style.visibility = 'visible';
      if ( model.errors.minlength ) {

      }
    }

    return style;
  }

}
