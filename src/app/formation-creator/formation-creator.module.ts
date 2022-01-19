import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormationCreatorComponent } from './formation-creator.component';
import { HeroSelectorComponent } from './hero-selector/hero-selector.component';
import { HeroSelectorDialogComponent } from './hero-selector-dialog/hero-selector-dialog.component';
import { RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDividerModule } from '@angular/material/divider';



@NgModule({
  declarations: [
    FormationCreatorComponent,
    HeroSelectorComponent,
    HeroSelectorDialogComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: FormationCreatorComponent
    }]),
    MatDialogModule,
    MatButtonModule,
    MatSnackBarModule,
    MatDividerModule
  ]
})
export class FormationCreatorModule { }
