import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { PayeesRoutingModule } from './payees-routing.module';
import { PayeesManagerComponent } from './payees-manager/payees-manager.component';
import { PayeeDetailComponent } from './payee-detail/payee-detail.component';
import { PayeesListComponent } from './payees-list/payees-list.component';
import { PayeesListRoutedComponent } from './payees-list-routed/payees-list-routed.component';
import { PayeesDetailRoutedComponent } from './payees-detail-routed/payees-detail-routed.component';

@NgModule( {
  imports: [
    SharedModule,
    PayeesRoutingModule
  ],
  declarations: [ PayeesManagerComponent, PayeeDetailComponent, PayeesListComponent, PayeesListRoutedComponent, PayeesDetailRoutedComponent ]
} )
export class PayeesModule {}
