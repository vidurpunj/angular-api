import { TestBed } from '@angular/core/testing';

import { SoftwareUsersService } from './software-users.service';

describe('SoftwareUsersService', () => {
  let service: SoftwareUsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SoftwareUsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
