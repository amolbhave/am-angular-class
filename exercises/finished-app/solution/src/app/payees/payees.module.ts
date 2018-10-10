import { NgModule } from '@angular/core';

import { PayeesRoutingModule } from './payees-routing.module';
import { PayeesListComponent } from './payees-list/payees-list.component';
import { PayeeDetailComponent } from './payee-detail/payee-detail.component';

import { PayeesManagerComponent } from './payees-manager/payees-manager.component';
import { PayeesSearchComponent } from './payees-search/payees-search.component';
import { PayeesSearchRoutedComponent } from './payees-search/payees-search-routed.component';
import { PayeesListRoutedComponent } from './payees-list/payees-list-routed.component';
import { PayeesEditComponent } from './payees-edit/payees-edit.component';
import { PayeesEditFormRoutedComponent } from './payees-edit/payees-edit-form-routed.component';
import { SharedModule } from '../shared/shared.module';
import { PayeeDetailRoutedComponent } from './payee-detail/payee-detail-routed.component';

@NgModule( {
  imports: [
    SharedModule,
    PayeesRoutingModule
  ],
  declarations: [ PayeesListComponent, PayeeDetailComponent, PayeesManagerComponent, PayeesSearchComponent, PayeesEditComponent,
                  PayeesSearchRoutedComponent, PayeesListRoutedComponent, PayeesEditFormRoutedComponent, PayeeDetailRoutedComponent ]
} )
export class PayeesModule {}
