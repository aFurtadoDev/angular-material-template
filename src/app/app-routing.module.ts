import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutBaseComponent } from './core/layout/layout-base/layout-base.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard',
  },
  {
    path: '',
    component: LayoutBaseComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./core/layout/layout-base/layout-base.module').then(
            (m) => m.LayoutBaseModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
