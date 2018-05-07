import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestValidFormComponent } from './test-valid-form.component';

describe('TestValidFormComponent', () => {
  let component: TestValidFormComponent;
  let fixture: ComponentFixture<TestValidFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestValidFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestValidFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
