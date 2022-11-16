import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionInvoicesComponent } from './subscription-invoices.component';

describe('SubscriptionInvoicesComponent', () => {
  let component: SubscriptionInvoicesComponent;
  let fixture: ComponentFixture<SubscriptionInvoicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubscriptionInvoicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriptionInvoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
