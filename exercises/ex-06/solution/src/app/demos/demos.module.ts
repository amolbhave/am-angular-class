import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemosRoutingModule } from './demos-routing.module';
import { ComponentWithDataComponent } from './component-with-data/component-with-data.component';
import { DemosListComponent } from './demos-list/demos-list.component';
import { DemoTesterComponent } from './demo-tester/demo-tester.component';
import { DemoNgIfComponent } from './demo-ngif/demo-ngif.component';
import { DemoNgifElseComponent } from './demo-ngif-else/demo-ngif-else.component';

@NgModule({
  imports: [
    CommonModule,
    DemosRoutingModule
  ],
  declarations: [ComponentWithDataComponent, DemosListComponent, DemoTesterComponent, DemoNgIfComponent, DemoNgifElseComponent]
})
export class DemosModule { }
