import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockComponent } from 'ng-mocks';

import { AscensionCalculatorComponent } from './ascension-calculator.component';
import { StarSelectorComponent } from './star-selector/star-selector.component';
import { StarComponent } from './star/star.component';

describe('AscensionCalculatorComponent', () => {
  let component: AscensionCalculatorComponent;
  let fixture: ComponentFixture<AscensionCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        AscensionCalculatorComponent,
        MockComponent(StarSelectorComponent)
      ]
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
