import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninPropComponent } from './signin-prop.component';

describe('SigninPropComponent', () => {
  let component: SigninPropComponent;
  let fixture: ComponentFixture<SigninPropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SigninPropComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninPropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
