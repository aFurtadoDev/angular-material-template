import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { AngularMaterialModule } from '../../../core/shared/modules/angular-material/angular-material.module';
import { DataTableComponent } from './data-table.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,

    // NgxMaskModule.forChild(),

    TranslateModule.forChild(),

    AngularMaterialModule,
  ],
  declarations: [DataTableComponent],
  exports: [DataTableComponent],
})
export class DataTableModule {}
