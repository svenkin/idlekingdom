import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/hero-cost-calculator'
  },
  {
    path: 'hero-cost-calculator',
    loadChildren: () => import('./hero-cost-calculator/hero-cost-calculator.module').then(m => m.HeroCostCalculatorModule)
  },
  {
    path: 'ascension-calculator',
    loadChildren: () => import('./ascension-calculator/ascension-calculator.module').then(m => m.AscensionCalculatorModule)
  },
  {
    path: 'formation-creator',
    loadChildren: () => import('./formation-creator/formation-creator.module').then(m => m.FormationCreatorModule)
  },
  {
    path: 'castle-level-calculator',
    loadChildren: () => import('./castle-level-calculator/castle-level-calculator.module').then(m => m.CastleLevelCalculatorModule)
  },
  {
    path: 'faq',
    loadChildren: () => import('./faq/faq.module').then(m => m.FaqModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
