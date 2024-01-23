import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TrabalhoPage } from './trabalho.page';

describe('TrabalhoPage', () => {
  let component: TrabalhoPage;
  let fixture: ComponentFixture<TrabalhoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TrabalhoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
