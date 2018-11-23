import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { EmployeeRegistrationRoutingModule } from './employee-registration.module.routing';

import { DataTableModule } from 'angular2-datatable';
import { HttpModule } from '@angular/http';
import { DataFilterPipe } from './idconfig/datafilterpipe';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { IdconfigComponent } from './idconfig/idconfig.component';

@NgModule({
  imports: [
      CommonModule,
      EmployeeRegistrationRoutingModule,
      TabsModule,
      DataTableModule,
      HttpModule,
      CollapseModule.forRoot()
    ],

  declarations: [
          HomeComponent,
          IdconfigComponent,
          DataFilterPipe
        ]
})
export class EmployeeRegistrationModule {}
