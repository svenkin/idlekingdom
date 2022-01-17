import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AscensionCalculatorComponent } from './ascension-calculator.component';

describe('AscensionCalculatorComponent', () => {
  let component: AscensionCalculatorComponent;
  let fixture: ComponentFixture<AscensionCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AscensionCalculatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AscensionCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
