import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { PayeesRoutingModule } from './payees-routing.module';
import { PayeesManagerComponent } from './payees-manager/payees-manager.component';
import { PayeeDetailComponent } from './payee-detail/payee-detail.component';
import { PayeesListComponent } from './payees-list/payees-list.component';

@NgModule( {
  imports: [
    SharedModule,
    PayeesRoutingModule
  ],
  declarations: [ PayeesManagerComponent, PayeeDetailComponent, PayeesListComponent ]
} )
export class PayeesModule {}
