import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarInsuredComponent } from './nav-bar-insured.component';

describe('NavBarInsuredComponent', () => {
  let component: NavBarInsuredComponent;
  let fixture: ComponentFixture<NavBarInsuredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBarInsuredComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarInsuredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
