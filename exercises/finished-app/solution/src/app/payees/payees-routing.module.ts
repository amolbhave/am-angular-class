import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PayeesManagerComponent } from './payees-manager/payees-manager.component';
import { PayeesSearchComponent } from './payees-search/payees-search.component';
import { PayeesListComponent } from './payees-list/payees-list.component';
import { PayeesSearchRoutedComponent } from './payees-search/payees-search-routed.component';
import { PayeesListRoutedComponent } from './payees-list/payees-list-routed.component';
import { PayeesEditFormRoutedComponent } from './payees-edit/payees-edit-form-routed.component';
import { PayeeDetailComponent } from './payee-detail/payee-detail.component';
import { PayeeDetailRoutedComponent } from './payee-detail/payee-detail-routed.component';

const routes: Routes = [
  {
    path: 'payees',
    component: PayeesManagerComponent,
    children: [
      { path: 'search', component: PayeesSearchRoutedComponent },
      { path: 'list', component: PayeesListRoutedComponent },
      { path: 'edit/:id', component: PayeesEditFormRoutedComponent},
      { path: 'detail/:id', component: PayeeDetailRoutedComponent},
      { path: '', pathMatch: 'full', redirectTo: 'search' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PayeesRoutingModule { }
