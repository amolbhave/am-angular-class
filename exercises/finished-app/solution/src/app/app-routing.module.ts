import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryManagerComponent } from './categories/categories-manager/categories-manager.component';
import { PeopleManagerComponent } from './people/people-manager/people-manager.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PayeesManagerComponent } from './payees/payees-manager/payees-manager.component';
import { TransactionsManagerComponent } from './transactions/transactions-manager/transactions-manager.component';

const routes: Routes = [
  {
    path: 'categories',
    component: CategoryManagerComponent
  },
  {
    path: 'payees',
    component: PayeesManagerComponent
  },
  {
    path: 'people',
    component: PeopleManagerComponent
  },
  {
    path: 'transactions',
    component: TransactionsManagerComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'categories'
  },
  {
    path: '**',
    pathMatch: 'full',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

