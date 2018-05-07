import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPropComponent } from './login-prop.component';

describe('LoginPropComponent', () => {
  let component: LoginPropComponent;
  let fixture: ComponentFixture<LoginPropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginPropComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
