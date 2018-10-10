import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Form, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SelectCategoriesComponent } from '../categories/select-categories/select-categories.component';

@NgModule( {
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [ SelectCategoriesComponent ],
  exports: [ CommonModule, FormsModule, HttpClientModule, SelectCategoriesComponent ]
} )
export class SharedModule {}
