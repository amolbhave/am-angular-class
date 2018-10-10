import { Component, Input, OnInit } from '@angular/core';
import { Payee } from '../Payee';

@Component({
  selector: 'payees-edit',
  templateUrl: './payees-edit.component.html',
  styles: []
})
export class PayeesEditComponent implements OnInit {

  @Input()
  editedPayee: Payee;

  constructor() { }

  ngOnInit() {
  }

}
