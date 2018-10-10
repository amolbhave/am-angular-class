import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemosRoutingModule } from './demos-routing.module';
import { ComponentWithDataComponent } from './component-with-data/component-with-data.component';
import { DemosListComponent } from './demos-list/demos-list.component';
import { DemoTesterComponent } from './demo-tester/demo-tester.component';

@NgModule({
  imports: [
    CommonModule,
    DemosRoutingModule
  ],
  declarations: [ComponentWithDataComponent, DemosListComponent, DemoTesterComponent]
})
export class DemosModule { }
