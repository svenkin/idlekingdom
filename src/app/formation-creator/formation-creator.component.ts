import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterState } from '@angular/router';
import { FormationCreatorService } from './formation-creator.service';
import { HeroTypeSelector } from './hero-selector/hero-selector.component';

@Component({
  selector: 'app-formation-creator',
  templateUrl: './formation-creator.component.html',
  styleUrls: ['./formation-creator.component.scss']
})
export class FormationCreatorComponent implements OnInit {

  public heroSelection: any = {}
  public completeHeroSelection: any = {}
  public preselected = {
    [HeroTypeSelector.WARRIOR]: [],
    [HeroTypeSelector.SUPPORT]: []
  }
  public selectableWarriors = Array.from({ length: 5 }, (v, i) => i)
  public selectableSupports = Array.from({ length: 7 }, (v, i) => i)
  constructor(private readonly router: ActivatedRoute, private readonly formationService: FormationCreatorService) { }

  ngOnInit(): void {
    console.log(this.router.snapshot.queryParams['load']);
    console.log(this.formationService.decodeString(this.router.snapshot.queryParams['load']));
    this.heroSelection = this.formationService.decodeString(this.router.snapshot.queryParams['load']);
    this.completeHeroSelection = this.heroSelection.all;
    this.preselected.warrior = this.heroSelection.warrior.filter((hero: any) => hero.selected).map(({ name }: any) => name)
    this.preselected.support = this.heroSelection.support.filter((hero: any) => hero.selected).map(({ name }: any) => name)
    console.log(this.preselected.warrior);
  }
  changeHero(event: any) {
    if (!!event) {
      this.completeHeroSelection[event].selected = true;
      console.log(this.formationService.encodeObject(this.completeHeroSelection));
    }
  }
}
