import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ascension-calculator',
  templateUrl: './ascension-calculator.component.html',
  styleUrls: ['./ascension-calculator.component.scss']
})
export class AscensionCalculatorComponent implements OnInit {

  constructor() { }
  public selectedStartLevel = 0;
  public selectedEndLevel = 0;
  public shardsCost = 0;
  public ascensionStonesCost = 0;
  ngOnInit(): void {
  }
  private shardsNeededPerLevel = 10;
  private ascensionStonesPer5Level = [80, 160, 320, 640, 1280]

  public calculateCost() {
    this.shardsCost = 0;
    this.ascensionStonesCost = 0;
    if (this.selectedEndLevel >= this.selectedStartLevel) {
      let currentBase = 0;
      for (let i = this.selectedStartLevel; i < this.selectedEndLevel; i++) {
        this.shardsCost += (i + 1) * this.shardsNeededPerLevel;
        if (i % 5 === 0) {
          currentBase = this.ascensionStonesPer5Level[i / 5]
        }
        console.log(i, currentBase)
        this.ascensionStonesCost += (i + 1 % 5) * currentBase
      }
    }
  }
}
