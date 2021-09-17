import { TestBed } from '@angular/core/testing';

import { ExperimentalloggerService } from './experimentallogger.service';

describe('ExperimentalloggerService', () => {
  let service: ExperimentalloggerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExperimentalloggerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
