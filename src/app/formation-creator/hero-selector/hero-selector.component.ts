import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormationCreatorService } from '../formation-creator.service';
import { HeroSelectorDialogComponent } from '../hero-selector-dialog/hero-selector-dialog.component';

@Component({
  selector: 'app-hero-selector',
  templateUrl: './hero-selector.component.html',
  styleUrls: ['./hero-selector.component.scss']
})
export class HeroSelectorComponent implements OnInit {

  @Input() type: HeroTypeSelector | string = HeroTypeSelector.ALL
  @Input() selectedHero = '';
  @Output() selectedHeroChange = new EventEmitter();
  constructor(private readonly dialog: MatDialog, private readonly formationService: FormationCreatorService) { }

  ngOnInit(): void {
  }
  openDialog() {
    const selectionList = this.formationService.getAllHeroNames(this.type as HeroTypeSelector);
    const dialogRef = this.dialog.open(HeroSelectorDialogComponent, {
      width: '80vw',
      data: { selectionList: selectionList, selected: '' },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'remove') {
        this.selectedHero = '';
      } else if (result) {
        this.selectedHero = result;
      }
      this.selectedHeroChange.emit(this.selectedHero)
    });
  }
}
export enum HeroTypeSelector {
  ALL = 'all',
  SUPPORT = 'support',
  WARRIOR = 'warrior'
}