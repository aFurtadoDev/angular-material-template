import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutBaseRoutingModule } from './layout-base-routing.module';
import { AngularMaterialModule } from '../../shared/modules/angular-material/angular-material.module';
import { LayoutBaseComponent } from './layout-base.component';
import { SharedModule } from '../shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    AngularMaterialModule,
    LayoutBaseRoutingModule,
    TranslateModule.forChild(),
    SharedModule,
  ],
  declarations: [LayoutBaseComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LayoutBaseModule {}
