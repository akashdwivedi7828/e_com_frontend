import { TestBed } from '@angular/core/testing';

import { HardcodedauthenticatedServiceService } from './hardcodedauthenticated-service.service';

describe('HardcodedauthenticatedServiceService', () => {
  let service: HardcodedauthenticatedServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HardcodedauthenticatedServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
