import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumberFormatPipe } from './number-format.pipe';



@NgModule({
  declarations: [NumberFormatPipe],
  imports: [
    CommonModule
  ],
  exports: [
    NumberFormatPipe,
    CommonModule
  ]
})
export class SharedModule { }
