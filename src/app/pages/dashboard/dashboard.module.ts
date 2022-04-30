import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { AngularMaterialModule } from '../../core/shared/modules/angular-material/angular-material.module';
@NgModule({
  imports: [CommonModule, DashboardRoutingModule, AngularMaterialModule],
  declarations: [],
})
export class DashboardModule {}
