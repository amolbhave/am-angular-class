import { NgModule } from '@angular/core';
import {SharedModule} from '../shared/shared.module';

import { DemosRoutingModule } from './demos-routing.module';
import { ComponentWithDataComponent } from './component-with-data/component-with-data.component';
import { DemosListComponent } from './demos-list/demos-list.component';
import { DemoTesterComponent } from './demo-tester/demo-tester.component';
import { DemoNgIfComponent } from './demo-ngif/demo-ngif.component';
import { DemoNgifElseComponent } from './demo-ngif-else/demo-ngif-else.component';
import { DemoEventHandlingComponent } from './demo-event-handling/demo-event-handling.component';
import { StaticDataComponent } from './static-data/static-data.component';
import { DemoChildComponent, PassingDataComponent } from './passing-data/passing-data.component';
import { CustomEventsChildComponent, CustomEventsComponent } from './custom-events/custom-events.component';
import { DemoPeopleListerComponent, IteratingDataComponent } from './iterating-data/iterating-data.component';
import { DemoTrackByListerComponent, TrackByComponent } from './track-by/track-by.component';
import {
  SiblingCommunicationComponent,
  SiblingCommunicationPeopleListerComponent, SiblingCommunicationPersonDetailComponent
} from './sibling-communication/sibling-communication.component';
import { SortablePeopleListerComponent, SortablePersonDetailComponent, SortingDataComponent } from './sorting-data/sorting-data.component';
import { DemoNgmodelComponent } from './demo-ngmodel/demo-ngmodel.component';
import {
  AdvancedFilteringComponent,
  FilteredListerComponent,
  FilterFormComponent
} from './advanced-filtering/advanced-filtering.component';

@NgModule( {
  imports: [
    SharedModule,
    DemosRoutingModule
  ],
  declarations: [ ComponentWithDataComponent, DemosListComponent, DemoTesterComponent, DemoNgIfComponent, DemoNgifElseComponent,
                  DemoEventHandlingComponent, StaticDataComponent, PassingDataComponent, DemoChildComponent, CustomEventsComponent,
                  CustomEventsChildComponent, DemoPeopleListerComponent, DemoTrackByListerComponent,
                  IteratingDataComponent, SiblingCommunicationPeopleListerComponent, SiblingCommunicationPersonDetailComponent,
                  TrackByComponent, SortablePeopleListerComponent, SortablePersonDetailComponent,
                  SiblingCommunicationComponent,
                  SortingDataComponent, FilteredListerComponent, FilterFormComponent,
                  DemoNgmodelComponent,
                  AdvancedFilteringComponent ]
} )
export class DemosModule {}
