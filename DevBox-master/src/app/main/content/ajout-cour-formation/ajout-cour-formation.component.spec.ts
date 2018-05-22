import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutCourFormationComponent } from './ajout-cour-formation.component';

describe('AjoutCourFormationComponent', () => {
  let component: AjoutCourFormationComponent;
  let fixture: ComponentFixture<AjoutCourFormationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutCourFormationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutCourFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
