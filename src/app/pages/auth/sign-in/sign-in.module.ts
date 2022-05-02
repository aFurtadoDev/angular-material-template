import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInRoutingModule } from './sign-in-routing.module';
import { SignInComponent } from './sign-in.component';
import { AngularMaterialModule } from '../../../core/shared/modules/angular-material/angular-material.module';

@NgModule({
  imports: [CommonModule, SignInRoutingModule, AngularMaterialModule],
  declarations: [SignInComponent],
})
export class SignInModule {}
