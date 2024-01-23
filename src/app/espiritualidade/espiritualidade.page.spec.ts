import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EspiritualidadePage } from './espiritualidade.page';

describe('EspiritualidadePage', () => {
  let component: EspiritualidadePage;
  let fixture: ComponentFixture<EspiritualidadePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EspiritualidadePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
