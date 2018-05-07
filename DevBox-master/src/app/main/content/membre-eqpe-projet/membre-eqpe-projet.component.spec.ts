import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MembreEqpeProjetComponent } from './membre-eqpe-projet.component';

describe('MembreEqpeProjetComponent', () => {
  let component: MembreEqpeProjetComponent;
  let fixture: ComponentFixture<MembreEqpeProjetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MembreEqpeProjetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MembreEqpeProjetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
