import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { AngularMaterialModule } from '../../../../core/shared/modules/angular-material/angular-material.module';
import { PanelHeaderComponent } from './panel-header.component';

@NgModule({
  imports: [CommonModule, TranslateModule.forChild(), AngularMaterialModule],
  exports: [PanelHeaderComponent],
  declarations: [PanelHeaderComponent],
})
export class PanelHeaderModule {}
