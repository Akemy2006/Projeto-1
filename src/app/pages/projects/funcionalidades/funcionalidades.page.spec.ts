import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FuncionalidadesPage } from './funcionalidades.page';

describe('FuncionalidadesPage', () => {
  let component: FuncionalidadesPage;
  let fixture: ComponentFixture<FuncionalidadesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FuncionalidadesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
