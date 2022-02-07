import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { HeroSelectorDialogComponent } from './hero-selector-dialog.component';

describe('HeroSelectorDialogComponent', () => {
  let component: HeroSelectorDialogComponent;
  let fixture: ComponentFixture<HeroSelectorDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatDialogModule
      ],
      declarations: [HeroSelectorDialogComponent],
      providers: [{ provide: MAT_DIALOG_DATA, useValue: {}}, { provide: MatDialogRef, useValue: {},  }]
    })
      .compileComponents();
  });
 
  beforeEach(() => {
    fixture = TestBed.createComponent(HeroSelectorDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
