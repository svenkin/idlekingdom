import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ActivatedRoute, RouterModule } from '@angular/router';

import { FormationCreatorComponent } from './formation-creator.component';
import { HeroSelectorComponent } from './hero-selector/hero-selector.component';
import { MockComponent } from 'ng-mocks';

describe('FormationCreatorComponent', () => {
  let component: FormationCreatorComponent;
  let fixture: ComponentFixture<FormationCreatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterModule, MatSnackBarModule],
      providers: [{
        provide: ActivatedRoute,
        useValue: {
          snapshot: { queryParams: {} }
        }
      }],
      declarations: [
        FormationCreatorComponent,
        MockComponent(HeroSelectorComponent)
      ],
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
