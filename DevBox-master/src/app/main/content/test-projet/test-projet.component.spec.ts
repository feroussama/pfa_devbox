import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestProjetComponent } from './test-projet.component';

describe('TestProjetComponent', () => {
  let component: TestProjetComponent;
  let fixture: ComponentFixture<TestProjetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestProjetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestProjetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
