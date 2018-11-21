import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { EmployeeRegistrationRoutingModule } from './employee-registration.module.routing';

import { TabsModule } from 'ngx-bootstrap/tabs';

@NgModule({
  imports: [CommonModule, EmployeeRegistrationRoutingModule, TabsModule],
  declarations: [HomeComponent]
})
export class EmployeeRegistrationModule {}
