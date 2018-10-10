import { NgModule } from '@angular/core';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoryManagerComponent } from './categories-manager/categories-manager.component';
import { CategoriesListComponent } from './categories-list/categories-list.component';
import { CategoryDetailComponent } from './category-detail/category-detail.component';
import { CategoryFormComponent } from './category-form/category-form.component';
import { SharedModule } from '../shared/shared.module';

@NgModule( {
  imports: [
    SharedModule,
    CategoriesRoutingModule
  ],
  declarations: [ CategoryManagerComponent, CategoriesListComponent, CategoryDetailComponent,
                  CategoryFormComponent ]
} )
export class CategoriesModule {}
