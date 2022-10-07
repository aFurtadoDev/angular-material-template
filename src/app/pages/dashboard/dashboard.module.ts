import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { AngularMaterialModule } from '../../core/shared/modules/angular-material/angular-material.module';
import { DashboardComponent } from './dashboard.component';
import { DataTableModule } from '../shared/data-table/data-table.module';
import { TranslateModule } from '@ngx-translate/core';
@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    // TranslateModule.forChild(),
    AngularMaterialModule,
    DataTableModule,
  ],
  declarations: [DashboardComponent],
})
export class DashboardModule {}
