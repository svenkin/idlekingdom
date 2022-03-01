import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ascension-calculator',
  templateUrl: './ascension-calculator.component.html',
  styleUrls: ['./ascension-calculator.component.scss']
})
export class AscensionCalculatorComponent implements OnInit {

  constructor() { }
  public selectedStartLevel = 0;
  public selectedEndLevel = 1;
  public shardsCost = 0;
  public ascensionStonesCost = 0;
  ngOnInit(): void {
    this.calculateCost();
  }
  private shardsNeededPerLevel = 10;
  private ascensionStonesPer5Level = [80, 160, 320, 640, 1280]

  public calculateCost() {
    this.shardsCost = 0;
    this.ascensionStonesCost = 0;
    let ascensionStonesCostLevel = 0;
    if (this.selectedEndLevel >= this.selectedStartLevel) {
      // Ascension cost
      let currentBase = 0;
      for (let i = 1; i <= this.selectedEndLevel; i++) {
        if (i === 1) {
          currentBase = 0;
        } else if (i <= 6) {
          currentBase = 80;
        } else {
          currentBase = this.ascensionStonesPer5Level[Math.floor((i - 1) / 5)];
        }
        ascensionStonesCostLevel += currentBase;
        if (i > this.selectedStartLevel) {
          this.shardsCost += i * this.shardsNeededPerLevel;
          this.ascensionStonesCost += ascensionStonesCostLevel;
        }
      }
    }
  }
}
