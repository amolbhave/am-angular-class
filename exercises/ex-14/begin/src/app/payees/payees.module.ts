import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PayeesRoutingModule } from './payees-routing.module';
import { PayeesManagerComponent } from './payees-manager/payees-manager.component';
import { PayeeDetailComponent } from './payee-detail/payee-detail.component';

@NgModule({
  imports: [
    CommonModule,
    PayeesRoutingModule
  ],
  declarations: [PayeesManagerComponent, PayeeDetailComponent]
})
export class PayeesModule { }
