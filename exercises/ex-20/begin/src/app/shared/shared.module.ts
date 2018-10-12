import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Form, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SelectCategoriesComponent } from '../categories/select-categories/select-categories.component';
import { AbsPipe } from './abs.pipe';

@NgModule( {
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [ SelectCategoriesComponent, AbsPipe ],
  exports: [ CommonModule, FormsModule, HttpClientModule, SelectCategoriesComponent, AbsPipe ]
} )
export class SharedModule {}
