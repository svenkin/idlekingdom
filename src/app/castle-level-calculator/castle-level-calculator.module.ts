import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CastleLevelCalculatorComponent } from './castle-level-calculator.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { RouterModule } from '@angular/router';
import { MatCheckboxModule } from '@angular/material/checkbox';



@NgModule({
  declarations: [
    CastleLevelCalculatorComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: CastleLevelCalculatorComponent
      }
    ]),
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    MatCheckboxModule
  ]
})
export class CastleLevelCalculatorModule { }
