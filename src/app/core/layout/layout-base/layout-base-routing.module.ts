import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from '../../../pages/auth/sign-in/sign-in.component';
import { DashboardComponent } from '../../../pages/dashboard/dashboard.component';

export const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('../../../pages/dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
      },
    ],
  },
  {
    path: 'sign-in',
    component: SignInComponent,
    children: [
      {
        path: 'sign-in',
        loadChildren: () =>
          import('../../../pages/auth/sign-in/sign-in.module').then(
            (m) => m.SignInModule
          ),
      },
    ],
  },
  { path: '**', redirectTo: 'dashboard' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutBaseRoutingModule {}
