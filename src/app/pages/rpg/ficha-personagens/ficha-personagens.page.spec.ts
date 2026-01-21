import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FichaPersonagensPage } from './ficha-personagens.page';

describe('FichaPersonagensPage', () => {
  let component: FichaPersonagensPage;
  let fixture: ComponentFixture<FichaPersonagensPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FichaPersonagensPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
