import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeopleManagerComponent } from './people-manager/people-manager.component';
import { PeopleListRoutedComponent } from './people-list/people-list-routed.component';
import { PersonEditComponent } from './people-form/person-edit.component';

const routes: Routes = [
  {
    path: 'people',
    component: PeopleManagerComponent,
    children: [
      {
        path: 'list',
        component: PeopleListRoutedComponent
      },
      {
        path: 'edit/:id',
        component: PersonEditComponent
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'list'
      },
      {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'list'
      }
    ]
  }
];

@NgModule( {
  imports: [ RouterModule.forChild( routes ) ],
  exports: [ RouterModule ]
} )
export class PeopleRoutingModule {}
