import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevResQcmComponent } from './dev-res-qcm.component';

describe('DevResQcmComponent', () => {
  let component: DevResQcmComponent;
  let fixture: ComponentFixture<DevResQcmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevResQcmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevResQcmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
