import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { of } from 'rxjs';

import { FormationCreatorComponent } from './formation-creator.component';

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
      declarations: [FormationCreatorComponent],
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
