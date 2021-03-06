import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { PayeesRoutingModule } from './payees-routing.module';
import { PayeesManagerComponent } from './payees-manager/payees-manager.component';
import { PayeeDetailComponent } from './payee-detail/payee-detail.component';
import { PayeesListComponent } from './payees-list/payees-list.component';
import { PayeesListRoutedComponent } from './payees-list-routed/payees-list-routed.component';
import { PayeeFormComponent } from './payee-form/payee-form.component';
import { PayeesSearchComponent } from './payees-search/payees-search.component';
import { ShowValidationDirective } from './show-validation/show-validation.directive';
import { PayeesListResolvedComponent } from './payees-list-resolved/payees-list-resolved.component';
import { PayeeDetailFooterComponent } from './payee-detail/payee-detail-footer.component';

@NgModule( {
  imports: [
    SharedModule,
    PayeesRoutingModule
  ],
  declarations: [ PayeesManagerComponent, PayeeDetailComponent, PayeesListComponent, PayeesListRoutedComponent, PayeeFormComponent,
                  PayeesSearchComponent,
                  ShowValidationDirective,
                  PayeesListResolvedComponent,
                  PayeeDetailFooterComponent ]
} )
export class PayeesModule {}
