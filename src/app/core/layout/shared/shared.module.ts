import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from '../../shared/modules/angular-material/angular-material.module';

@NgModule({
  declarations: [HeaderComponent, SideNavComponent],
  imports: [CommonModule, RouterModule, AngularMaterialModule],
  exports: [HeaderComponent, SideNavComponent],
})
export class SharedModule {}
