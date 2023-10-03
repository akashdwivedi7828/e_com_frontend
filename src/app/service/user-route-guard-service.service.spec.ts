import { TestBed } from '@angular/core/testing';

import { UserRouteGuardServiceService } from './user-route-guard-service.service';

describe('UserRouteGuardServiceService', () => {
  let service: UserRouteGuardServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserRouteGuardServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
