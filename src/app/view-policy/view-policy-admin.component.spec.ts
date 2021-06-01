import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPolicyAdminComponent } from './view-policy-admin.component';

describe('ViewPolicyAdminComponent', () => {
  let component: ViewPolicyAdminComponent;
  let fixture: ComponentFixture<ViewPolicyAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPolicyAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPolicyAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
