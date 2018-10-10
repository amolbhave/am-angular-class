import { Component, OnInit, Input } from '@angular/core';
import { Payee } from '../Payee';

@Component({
  selector: 'payee-detail',
  templateUrl: './payee-detail.component.html',
  styles: []
})
export class PayeeDetailComponent implements OnInit {
  @Input()
  payee: Payee;

  constructor() { }

  ngOnInit() {
  }

}
