import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeopleRoutingModule } from './people-routing.module';
import { PeopleManagerComponent } from './people-manager/people-manager.component';

@NgModule({
  imports: [
    CommonModule,
    PeopleRoutingModule
  ],
  declarations: [PeopleManagerComponent]
})
export class PeopleModule { }
