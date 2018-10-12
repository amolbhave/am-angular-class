import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemosListComponent } from './demos-list/demos-list.component';
import { ComponentWithDataComponent } from './component-with-data/component-with-data.component';
import { DemoTesterComponent } from './demo-tester/demo-tester.component';
import { DemoNgIfComponent } from './demo-ngif/demo-ngif.component';
import { DemoNgifElseComponent } from './demo-ngif-else/demo-ngif-else.component';
import { DemoEventHandlingComponent } from './demo-event-handling/demo-event-handling.component';
import { StaticDataComponent } from './static-data/static-data.component';
import { PassingDataComponent } from './passing-data/passing-data.component';
import { CustomEventsComponent } from './custom-events/custom-events.component';
import { IteratingDataComponent } from './iterating-data/iterating-data.component';
import { TrackByComponent } from './track-by/track-by.component';
import { SiblingCommunicationComponent } from './sibling-communication/sibling-communication.component';
import { SortingDataComponent } from './sorting-data/sorting-data.component';
import { DemoNgmodelComponent } from './demo-ngmodel/demo-ngmodel.component';
import { AdvancedFilteringComponent } from './advanced-filtering/advanced-filtering.component';

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
      },
      {
        path: 'demo-event-handling',
        component: DemoEventHandlingComponent
      },
      {
        path: 'static-data',
        component: StaticDataComponent
      },
      {
        path: 'passing-data',
        component: PassingDataComponent
      },
      {
        path: 'custom-event',
        component: CustomEventsComponent
      },
      {
        path: 'iterating-data',
        component: IteratingDataComponent
      },
      {
        path: 'track-by',
        component: TrackByComponent
      },
      {
        path: 'sibling-communication',
        component: SiblingCommunicationComponent
      },
      {
        path: 'sorting-data',
        component: SortingDataComponent
      },
      {
        path: 'demo-ngmodel',
        component: DemoNgmodelComponent
      },
      {
        path: 'advanced-filtering',
        component: AdvancedFilteringComponent
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemosRoutingModule { }
