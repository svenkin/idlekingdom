import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroSelectorDialogComponent } from './hero-selector-dialog.component';

describe('HeroSelectorDialogComponent', () => {
  let component: HeroSelectorDialogComponent;
  let fixture: ComponentFixture<HeroSelectorDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroSelectorDialogComponent ]
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
