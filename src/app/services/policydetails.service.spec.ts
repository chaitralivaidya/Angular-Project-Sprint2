import { TestBed } from '@angular/core/testing';

import { PolicydetailsService } from './policydetails.service';

describe('PolicydetailsService', () => {
  let service: PolicydetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PolicydetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
