import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-hero-selector-dialog',
  templateUrl: './hero-selector-dialog.component.html',
  styleUrls: ['./hero-selector-dialog.component.scss']
})
export class HeroSelectorDialogComponent implements OnInit {
  public selectableHeroList: Array<string> = []
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: { selectionList: Array<string>, selected: string },
    private dialogRef: MatDialogRef<HeroSelectorDialogComponent>
  ) {
    this.selectableHeroList = data.selectionList;
  }

  ngOnInit(): void {
  }

  select(hero: string) {
    this.dialogRef.close(hero)
  }
  close() {
    this.dialogRef.close()
  }

}
