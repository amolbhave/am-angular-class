import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemosListComponent } from './demos-list/demos-list.component';
import { ComponentWithDataComponent } from './component-with-data/component-with-data.component';
import { DemoTesterComponent } from './demo-tester/demo-tester.component';
import { DemoNgIfComponent } from './demo-ngif/demo-ngif.component';
import { DemoNgifElseComponent } from './demo-ngif-else/demo-ngif-else.component';

const routes: Routes = [
  {
    path : 'demos',
    component : DemosListComponent,
    children : [
      {
        path : 'component-with-data',
        component : ComponentWithDataComponent
      },
      {
        path: 'demo-tester',
        component: DemoTesterComponent
      },
      {
        path: 'demo-ngif',
        component: DemoNgIfComponent
      },
      {
        path: 'demo-ngif-else',
        component: DemoNgifElseComponent
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemosRoutingModule { }
