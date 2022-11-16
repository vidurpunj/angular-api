import { TestBed } from '@angular/core/testing';

import { SubscriptionInvoicesService } from './subscription-invoices.service';

describe('SubscriptionInvoicesService', () => {
  let service: SubscriptionInvoicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubscriptionInvoicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
