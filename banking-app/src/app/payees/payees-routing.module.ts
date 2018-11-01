import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PayeesManagerComponent } from './payees-manager/payees-manager.component';
import { PayeesListRoutedComponent } from './payees-list-routed/payees-list-routed.component';
import { PayeesSearchComponent } from './payees-search/payees-search.component';
import { PayeeDetailComponent } from './payee-detail/payee-detail.component';
import { PayeeFormComponent } from './payee-form/payee-form.component';
import { PayeeDetailResolverService } from './payee-detail-resolver.service';

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
        path: 'search',
        component: PayeesSearchComponent
      },
      {
        path: 'detail/:id',
        component: PayeeDetailComponent,
        resolve: {
          payee: PayeeDetailResolverService
        }
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
        redirectTo: 'list'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PayeesRoutingModule { }
