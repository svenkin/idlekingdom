import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroCostCalculatorComponent } from './hero-cost-calculator.component';

describe('HeroCostCalculatorComponent', () => {
  let component: HeroCostCalculatorComponent;
  let fixture: ComponentFixture<HeroCostCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroCostCalculatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroCostCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
