import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { PeopleRoutingModule } from './people-routing.module';
import { PeopleManagerComponent } from './people-manager/people-manager.component';
import { PeopleListComponent } from './people-list/people-list.component';
import { PeopleFormComponent } from './people-form/people-form.component';
import { PersonEditComponent } from './people-form/person-edit.component';
import { PeopleListRoutedComponent } from './people-list/people-list-routed.component';

@NgModule( {
  imports: [
    SharedModule,
    PeopleRoutingModule
  ],
  declarations: [ PeopleManagerComponent, PeopleListComponent, PeopleFormComponent, PersonEditComponent, PeopleListRoutedComponent ]
} )
export class PeopleModule {}
