import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { IdconfigComponent } from './idconfig/idconfig.component';


export const routes: Routes = [
  {
    path: '',
    data: {
      title: 'EmployeeRegistration'
    },
    children: [
      {
        path: 'home',
        component: HomeComponent,
        data: {
          title: 'Home'
        }
      },
      {
        path: 'idconfig',
       component: IdconfigComponent,
        data: {
      title: 'idconfig'
    }
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRegistrationRoutingModule {}
