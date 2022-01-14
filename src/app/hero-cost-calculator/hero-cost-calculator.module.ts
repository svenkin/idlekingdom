import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroCostCalculatorComponent } from './hero-cost-calculator.component';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';

import { NumberFormatPipe } from './number-format.pipe';



@NgModule({
  declarations: [
    HeroCostCalculatorComponent,
    NumberFormatPipe
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: HeroCostCalculatorComponent
      }
    ]),
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCheckboxModule
  ]
})
export class HeroCostCalculatorModule { }
