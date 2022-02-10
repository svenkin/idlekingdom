import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockComponent } from 'ng-mocks';
import { StarComponent } from '../star/star.component';

import { StarSelectorComponent } from './star-selector.component';

describe('StarSelectorComponent', () => {
  let component: StarSelectorComponent;
  let fixture: ComponentFixture<StarSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        StarSelectorComponent,
        MockComponent(StarComponent)
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StarSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
