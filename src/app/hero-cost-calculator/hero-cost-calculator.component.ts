import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

export class HeroCostErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

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
  dataCoins: any = [];
  dataSoulstones: any = [];
  dataCoinsTotal: any = [];
  dataSoulstonesTotal: any = [];
  coinsInOutput = 0;
  soulstonesInOutput = 0;
  incCoins: any = [
    3, 4, 3, 4, 4, 3, 4, 3, 4, 4,
    3, 3, 3, 3, 4, 3, 3, 3, 3, 4,
    2, 3, 3, 3, 3, 2, 3, 3, 3, 3,
    3, 3, 4, 3, 4, 3, 3, 4, 3, 4,
    3, 0, 0, 0, 0, 0, 0, 0, 0, 0
  ];
  incSoulstones: any = [
    2, 3, 2, 3, 2, 3, 2, 3, 2, 3,
    2, 2, 2, 2, 2, 2, 2, 2, 2, 2
  ];
  coinsCostSpan = 0;
  soulstonesCostSpan = 0;

  heroCostFormGroup = this.fb.group({
    startLevel: this.fb.control(1, [Validators.required, Validators.min(1), Validators.max(12000)]),
    endLevel: this.fb.control(1, [Validators.required, Validators.min(1), Validators.max(12000)]),
    formatted: this.fb.control(false)
  }, { validators: levelValidator })
  matcher = new HeroCostErrorStateMatcher();

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
      if (i != 0 && i % 10 == 0) {
        if ((i % 50) >= 40) {
          coinsDelta += 7;
        } else if ((i % 50) >= 30) {
          coinsDelta += 3;
        } else if ((i % 50) >= 20) {
          coinsDelta += 4;
        } else if ((i % 50) >= 10) {
          coinsDelta += 4;
        }
      }
      coinsCost += coinsDelta + this.incCoins[i % this.incCoins.length];
      this.dataCoins.push(coinsCost);
      this.dataCoinsTotal.push(this.dataCoinsTotal[this.dataCoinsTotal.length - 1] + coinsCost);
    }
  }
  public calculateCost() {
    if(this.heroCostFormGroup.valid){
      let startLevel = this.heroCostFormGroup.get('startLevel')?.value;
      let endLevel = this.heroCostFormGroup.get('endLevel')?.value;
      let cs = 0;
      let sss = 0;
      if (startLevel != 1) {
        cs = this.dataCoinsTotal[endLevel - 2] - this.dataCoinsTotal[startLevel - 2];
        sss = this.dataSoulstonesTotal[endLevel - 2] - this.dataSoulstonesTotal[startLevel - 2];
      } else {
        cs = 0;
        sss = 0;
      }
      this.coinsInOutput = cs;
      this.soulstonesInOutput = sss;
    }
  }
}

