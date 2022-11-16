import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareUsersComponent } from './software-users.component';

describe('SoftwareUsersComponent', () => {
  let component: SoftwareUsersComponent;
  let fixture: ComponentFixture<SoftwareUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoftwareUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftwareUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
