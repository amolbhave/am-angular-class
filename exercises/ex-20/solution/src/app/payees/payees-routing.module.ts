import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PayeesListRoutedComponent } from './payees-list-routed/payees-list-routed.component';
import { PayeesDetailRoutedComponent } from './payees-detail-routed/payees-detail-routed.component';

const routes: Routes = [
  {
    path: 'payees/list',
    component: PayeesListRoutedComponent
  },
  {
    path: 'payees/detail/:id',
    component: PayeesDetailRoutedComponent
  },
  {
    path: 'payees',
    redirectTo: 'payees/list'
  }
];

/*
 * We will finish our transition to routing by adding in PayeeDetail
 *
 * Use the CLI to create the PayeeDetailRoutedComponent component
 *
 * Go to PayeesManagerComponent and copy the following functions to PayeeDetailRouted:
 * - getPayee
 *
 * Go to payees-manager.component.html and copy the HTML code for payee-detail
 * into payee-detail-routed.component.html. You can delete the *ngIf
 *
 * Add a route for payees/detail/:id, which uses the PayeeDetailRouted component
 *
 * Now we need to connect PayeesList to PayeeDetail
 *
 * Go to payees-list-routed.component.ts and follow the instructions there
 *
 *
 */

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PayeesRoutingModule { }
