import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevDiscuComponent } from './dev-discu.component';

describe('DevDiscuComponent', () => {
  let component: DevDiscuComponent;
  let fixture: ComponentFixture<DevDiscuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevDiscuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevDiscuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
