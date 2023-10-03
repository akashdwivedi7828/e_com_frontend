import { TestBed } from '@angular/core/testing';

import { SellerLoginRoleService } from './seller-login-role.service';

describe('SellerLoginRoleService', () => {
  let service: SellerLoginRoleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SellerLoginRoleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
