import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { CustomErrorStateMatcher } from '../shared/custom-error-state-matcher';

export const levelValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const startLevel = control.get('startLevel')?.value;
  const endLevel = control.get('endLevel')?.value;
  return startLevel > endLevel ? { endBeforeStart: true } : null;
};

@Component({
  selector: 'app-castle-level-calculator',
  templateUrl: './castle-level-calculator.component.html',
  styleUrls: ['./castle-level-calculator.component.scss']
})
export class CastleLevelCalculatorComponent implements OnInit {

  castleLevelFormGroup = this.fb.group({
    startLevel: this.fb.control(1, [Validators.required, Validators.min(1), Validators.max(50000)]),
    endLevel: this.fb.control(1, [Validators.required, Validators.min(1), Validators.max(50000)]),
    formatted: this.fb.control(false)
  }, { validators: levelValidator });
  errorMatcher = new CustomErrorStateMatcher();
  coinsResult = 0;

  constructor(private readonly fb: FormBuilder) { }

  ngOnInit(): void {
    this.castleLevelFormGroup.valueChanges.subscribe(() => {
      this.calculateCastleLevelCost();
    })
  }

  public calculateCastleLevelCost() {
    if (this.castleLevelFormGroup.valid) {
      let startLevel = this.castleLevelFormGroup.get('startLevel')?.value;
      let endLevel = this.castleLevelFormGroup.get('endLevel')?.value;
      let currentStepValue = 100;
      this.coinsResult = 0;
      for (let index = 1; index < endLevel; index++) {
        const roundedValue = Math.floor(index / 500 - 0.0021);
        currentStepValue += this.getStepNumber(roundedValue);
        if (index >= startLevel && index < endLevel) {
          this.coinsResult += currentStepValue;
        }
      }
    }
  }

  private getStepNumber(calculationResult: number) {
    return calculationResult <= 20 ? (calculationResult + 1) * 10 : 210;
  }
}
