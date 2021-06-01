import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarAgentComponent } from './nav-bar-agent.component';

describe('NavBarAgentComponent', () => {
  let component: NavBarAgentComponent;
  let fixture: ComponentFixture<NavBarAgentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBarAgentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
