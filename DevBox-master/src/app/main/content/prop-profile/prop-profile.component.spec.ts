import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropProfileComponent } from './prop-profile.component';

describe('PropProfileComponent', () => {
  let component: PropProfileComponent;
  let fixture: ComponentFixture<PropProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
