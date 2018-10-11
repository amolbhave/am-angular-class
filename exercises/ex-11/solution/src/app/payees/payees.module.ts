import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PayeesRoutingModule } from './payees-routing.module';
import { PayeesManagerComponent } from './payees-manager/payees-manager.component';

@NgModule({
  imports: [
    CommonModule,
    PayeesRoutingModule
  ],
  declarations: [PayeesManagerComponent]
})
export class PayeesModule { }
