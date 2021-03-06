import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { CustomErrorStateMatcher } from '../shared/custom-error-state-matcher';

export const levelValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const startLevel = control.get('startLevel')?.value;
  const endLevel = control.get('endLevel')?.value;
  return startLevel > endLevel ? { endBeforeStart: true } : null;
};

@Component({
  selector: 'app-hero-cost-calculator',
  templateUrl: './hero-cost-calculator.component.html',
  styleUrls: ['./hero-cost-calculator.component.scss']
})
export class HeroCostCalculatorComponent implements OnInit {
  dataCoins: Array<number> = [];
  dataSoulstones: Array<number> = [];
  dataCoinsTotal: Array<number> = [];
  dataSoulstonesTotal: Array<number> = [];
  coinsInOutput = 0;
  soulstonesInOutput = 0;
  incCoins = [
    3, 4, 3, 4, 4, 3, 4, 3, 4,
    4, 3, 3, 3, 3, 4, 3, 3, 3,
    3, 4, 2, 3, 3, 3, 3, 2, 3,
    3, 3, 3, 3, 3, 4, 3, 4, 3,
    3, 4, 3, 4, 3, 3, 3, 3, 3,
    3, 3, 3, 3, 3
  ]
  incSoulstones: Array<number> = [
    2, 3, 2, 3, 2, 3, 2, 3, 2, 3,
    2, 2, 2, 2, 2, 2, 2, 2, 2, 2
  ];
  coinsCostSpan = 0;
  soulstonesCostSpan = 0;

  heroCostFormGroup = this.fb.group({
    startLevel: this.fb.control(1, [Validators.required, Validators.min(1), Validators.max(12000)]),
    endLevel: this.fb.control(1, [Validators.required, Validators.min(1), Validators.max(12000)]),
    formatted: this.fb.control(false)
  }, { validators: levelValidator });
  matcher = new CustomErrorStateMatcher();

  constructor(private readonly fb: FormBuilder) { }

  ngOnInit(): void {
    this.calcData();
    this.heroCostFormGroup.valueChanges.subscribe(() => {
      this.calculateCost();
    })
  }
  calcData() {
    this.dataSoulstones = [];
    this.dataSoulstonesTotal = [];
    let soulstoneDelta = 10;
    let soulstoneCost = 200;
    for (let i = 0; i < 10; i++) {
      this.dataSoulstones.push(soulstoneCost);
      if (this.dataSoulstonesTotal.length != 0)
        this.dataSoulstonesTotal.push(this.dataSoulstonesTotal[this.dataSoulstonesTotal.length - 1] + soulstoneCost);
      else
        this.dataSoulstonesTotal.push(soulstoneCost);
      soulstoneCost += soulstoneDelta;
    }
    this.dataSoulstones.push(soulstoneCost);
    this.dataSoulstonesTotal.push(this.dataSoulstonesTotal[this.dataSoulstonesTotal.length - 1] + soulstoneCost)
    for (let i = 0; i < 11989; i++) {
      if (i != 0 && i % 10 == 0) {
        soulstoneDelta += i % 20 == 0 ? 2 : 3;
      }
      soulstoneCost += soulstoneDelta + this.incSoulstones[i % this.incSoulstones.length];
      this.dataSoulstones.push(soulstoneCost);
      this.dataSoulstonesTotal.push(this.dataSoulstonesTotal[this.dataSoulstonesTotal.length - 1] + soulstoneCost)
    }
    this.dataCoins = [];
    this.dataCoinsTotal = [];
    let coinsDelta = 5;
    let lastCoinsDelta = 5;
    let coinsCost = 100;
    for (let i = 0; i < 10; i++) {
      this.dataCoins.push(coinsCost);
      if (this.dataCoinsTotal.length != 0)
        this.dataCoinsTotal.push(this.dataCoinsTotal[this.dataCoinsTotal.length - 1] + coinsCost);
      else
        this.dataCoinsTotal.push(coinsCost);
      coinsCost += coinsDelta;
    }
    this.dataCoins.push(coinsCost);
    this.dataCoinsTotal.push(this.dataCoinsTotal[this.dataCoinsTotal.length - 1] + coinsCost);
    for (let i = 0; i < 11989; i++) {
      if (i % 10 === 0) {
        if (i > 0) {
          coinsDelta = lastCoinsDelta
        }
      }
      coinsCost += coinsDelta + this.incCoins[i % this.incCoins.length]
      lastCoinsDelta = coinsDelta + this.incCoins[i % this.incCoins.length]
      this.dataCoins.push(coinsCost);
      this.dataCoinsTotal.push(this.dataCoinsTotal[this.dataCoinsTotal.length - 1] + coinsCost);
    }
  }
  public calculateCost() {
    if (this.heroCostFormGroup.valid) {
      let startLevel = this.heroCostFormGroup.get('startLevel')?.value;
      let endLevel = this.heroCostFormGroup.get('endLevel')?.value;
      let cs = 0;
      let sss = 0;
      if (startLevel > 1) {
        console.log(this.dataCoinsTotal[startLevel], this.dataCoinsTotal[endLevel])
        cs = this.dataCoinsTotal[endLevel - 2] - this.dataCoinsTotal[startLevel - 2];
        sss = this.dataSoulstonesTotal[endLevel - 2] - this.dataSoulstonesTotal[startLevel - 2];
      } else if (startLevel === 1) {
        cs = this.dataCoinsTotal[endLevel - 2] || 0;
        sss = this.dataSoulstonesTotal[endLevel - 2] || 0;
      } else {
        cs = 0;
        sss = 0;
      }
      this.coinsInOutput = cs;
      this.soulstonesInOutput = sss;
    }
  }
}

