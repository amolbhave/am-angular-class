import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PayeesManagerComponent } from './payees-manager/payees-manager.component';
import { PayeesListRoutedComponent } from './payees-list-routed/payees-list-routed.component';
import { PayeesSearchComponent } from './payees-search/payees-search.component';
import { PayeeDetailComponent } from './payee-detail/payee-detail.component';
import { PayeeFormComponent } from './payee-form/payee-form.component';
import { PayeeDetailResolverService } from './payee-detail-resolver.service';
import { PayeesListResolvedComponent } from './payees-list-resolved/payees-list-resolved.component';
import { PayeesResolverService } from './payees-list-resolved/payees-resolver.service';
import { PayeeDetailFooterComponent } from './payee-detail/payee-detail-footer.component';

const routes: Routes = [
  {
    path: 'payees',
    component: PayeesManagerComponent,
    children: [
      {
        path: 'list',
        component: PayeesListRoutedComponent
      },
      {
        path: 'list-resolved',
        component: PayeesListResolvedComponent,
        resolve: {
          payees: PayeesResolverService
        },
        runGuardsAndResolvers: 'paramsOrQueryParamsChange'
      },
      {
        path: 'search',
        component: PayeesSearchComponent
      },
      {
        path: 'detail/:id',
        component: PayeeDetailComponent,
        resolve: {
          payee: PayeeDetailResolverService
        },
        runGuardsAndResolvers: 'paramsOrQueryParamsChange'
      },
      {
        path: 'footer',
        outlet: 'footerOutlet',
        component: PayeeDetailFooterComponent
      },
      {
        path: 'add',
        component: PayeeFormComponent
      },
      {
        path: 'edit/:id',
        component: PayeeFormComponent
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'search'
      }
    ]
  }
];

@NgModule( {
  imports: [ RouterModule.forChild( routes ) ],
  exports: [ RouterModule ]
} )
export class PayeesRoutingModule {}
