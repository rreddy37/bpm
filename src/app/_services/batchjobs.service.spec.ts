import { TestBed, inject } from '@angular/core/testing';

import { BatchjobsService } from './batchjobs.service';

describe('BatchjobsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BatchjobsService]
    });
  });

  it('should be created', inject([BatchjobsService], (service: BatchjobsService) => {
    expect(service).toBeTruthy();
  }));
});
