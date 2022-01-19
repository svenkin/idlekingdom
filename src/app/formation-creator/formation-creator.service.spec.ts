import { TestBed } from '@angular/core/testing';

import { FormationCreatorService } from './formation-creator.service';

describe('FormationCreatorService', () => {
  let service: FormationCreatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormationCreatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
