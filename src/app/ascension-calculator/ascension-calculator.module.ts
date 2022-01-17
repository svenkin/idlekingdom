import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AscensionCalculatorComponent } from './ascension-calculator.component';
import { RouterModule } from '@angular/router';
import { StarSelectorComponent } from './star-selector/star-selector.component';
import { StarComponent } from './star/star.component';



@NgModule({
  declarations: [
    AscensionCalculatorComponent,
    StarSelectorComponent,
    StarComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: AscensionCalculatorComponent
    }])
  ]
})
export class AscensionCalculatorModule { }
