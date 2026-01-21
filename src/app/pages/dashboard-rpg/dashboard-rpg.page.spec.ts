import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardRPGPage } from './dashboard-rpg.page';

describe('DashboardRPGPage', () => {
  let component: DashboardRPGPage;
  let fixture: ComponentFixture<DashboardRPGPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardRPGPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
