import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrasosPage } from './prasos.page';

describe('PrasosPage', () => {
  let component: PrasosPage;
  let fixture: ComponentFixture<PrasosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PrasosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
