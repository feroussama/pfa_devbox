import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichQcmComponent } from './affich-qcm.component';

describe('AffichQcmComponent', () => {
  let component: AffichQcmComponent;
  let fixture: ComponentFixture<AffichQcmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffichQcmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffichQcmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
