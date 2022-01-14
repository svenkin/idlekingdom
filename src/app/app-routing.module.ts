import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '/hero-cost-calculator'
  },
  {
    path: 'hero-cost-calculator',
    loadChildren: () => import('./hero-cost-calculator/hero-cost-calculator.module').then(m => m.HeroCostCalculatorModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
