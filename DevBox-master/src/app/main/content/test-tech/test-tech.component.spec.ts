import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestTechComponent } from './test-tech.component';

describe('TestTechComponent', () => {
  let component: TestTechComponent;
  let fixture: ComponentFixture<TestTechComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestTechComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
