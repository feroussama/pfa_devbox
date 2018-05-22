import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapFormComponent } from './chap-form.component';

describe('ChapFormComponent', () => {
  let component: ChapFormComponent;
  let fixture: ComponentFixture<ChapFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChapFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
