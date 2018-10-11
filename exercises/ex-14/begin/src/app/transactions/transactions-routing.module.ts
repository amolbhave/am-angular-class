import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransactionsManagerComponent } from './transactions-manager/transactions-manager.component';
import { TransactionDetailComponent } from './transaction-detail/transaction-detail.component';
import { TransactionEditComponent } from './transaction-edit/transaction-edit.component';
import { TransactionsSearchRoutedComponent } from './transactions-search/transactions-search-routed.component';
import { TransactionsListRoutedComponent } from './transactions-list/transactions-list-routed.component';

const routes: Routes = [
  {
    path : 'tx',
    component : TransactionsManagerComponent,
    children : [
      {
        path : 'detail/:id',
        component : TransactionDetailComponent
      },
      {
        path : 'edit/:id',
        component : TransactionEditComponent
      },
      {
        path: 'search',
        component: TransactionsSearchRoutedComponent
      },
      {
        path: 'list',
        component: TransactionsListRoutedComponent
      },
      {
        path: '**',
        redirectTo: 'search'
      }
    ]
  }
];

@NgModule( {
  imports : [ RouterModule.forChild( routes ) ],
  exports : [ RouterModule ]
} )
export class TransactionsRoutingModule {}
