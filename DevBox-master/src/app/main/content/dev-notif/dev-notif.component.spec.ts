import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevNotifComponent } from './dev-notif.component';

describe('DevNotifComponent', () => {
  let component: DevNotifComponent;
  let fixture: ComponentFixture<DevNotifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevNotifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevNotifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
