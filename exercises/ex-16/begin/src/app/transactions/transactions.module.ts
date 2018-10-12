import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { TransactionsRoutingModule } from './transactions-routing.module';
import { TransactionsListComponent } from './transactions-list/transactions-list.component';
import { TransactionsListRoutedComponent } from './transactions-list/transactions-list-routed.component';
import { TransactionsManagerComponent } from './transactions-manager/transactions-manager.component';
import { TransactionDetailComponent } from './transaction-detail/transaction-detail.component';
import { TransactionsSearchComponent } from './transactions-search/transactions-search.component';
import { TransactionsSearchRoutedComponent } from './transactions-search/transactions-search-routed.component';
import { TransactionEditComponent } from './transaction-edit/transaction-edit.component';

@NgModule( {
  imports: [
    SharedModule,
    TransactionsRoutingModule
  ],
  declarations: [ TransactionsListComponent, TransactionDetailComponent,
                  TransactionsManagerComponent, TransactionEditComponent,
                  TransactionDetailComponent, TransactionsSearchComponent,
                  TransactionEditComponent, TransactionsSearchRoutedComponent,
                  TransactionsListRoutedComponent ],
  exports: [ TransactionsListComponent, TransactionDetailComponent ]
} )
export class TransactionsModule {}
