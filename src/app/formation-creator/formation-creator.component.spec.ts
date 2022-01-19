import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationCreatorComponent } from './formation-creator.component';

describe('FormationCreatorComponent', () => {
  let component: FormationCreatorComponent;
  let fixture: ComponentFixture<FormationCreatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormationCreatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormationCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
