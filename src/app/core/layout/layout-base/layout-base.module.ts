import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutBaseRoutingModule } from './layout-base-routing.module';
import { AngularMaterialModule } from '../../shared/modules/angular-material/angular-material.module';
import { LayoutBaseComponent } from './layout-base.component';

@NgModule({
  imports: [CommonModule, AngularMaterialModule, LayoutBaseRoutingModule],
  declarations: [LayoutBaseComponent],
})
export class LayoutBaseModule {}
