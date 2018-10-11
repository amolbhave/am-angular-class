import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriesListComponent } from './categories-list/categories-list.component';
import { CategoryDetailComponent } from './category-detail/category-detail.component';
import { CategoryFormComponent } from './category-form/category-form.component';

const routes: Routes = [
  {
    path: 'categories/list',
    component: CategoriesListComponent
  },
  {
    path: 'categories/detail/:id',
    component: CategoryDetailComponent
  },
  {
    path: 'categories/add',
    component: CategoryFormComponent
  },
  {
    path: 'categories/edit/:id',
    component: CategoryFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule {}
