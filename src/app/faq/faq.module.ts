import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaqComponent } from './faq.component';
import { RouterModule } from '@angular/router';
import { MatDividerModule } from '@angular/material/divider';



@NgModule({
  declarations: [
    FaqComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: FaqComponent
      }
    ]),
    MatDividerModule
  ]
})
export class FaqModule { }
