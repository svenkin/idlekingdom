import { NgModule } from '@angular/core';
import { HeroCostCalculatorComponent } from './hero-cost-calculator.component';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    HeroCostCalculatorComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: HeroCostCalculatorComponent
      }
    ]),
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCheckboxModule,
    MatDividerModule
  ]
})
export class HeroCostCalculatorModule { }
