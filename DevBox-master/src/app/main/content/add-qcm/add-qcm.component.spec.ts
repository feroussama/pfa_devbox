import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddQcmComponent } from './add-qcm.component';

describe('AddQcmComponent', () => {
  let component: AddQcmComponent;
  let fixture: ComponentFixture<AddQcmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddQcmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddQcmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
