import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefDiscuComponent } from './chef-discu.component';

describe('ChefDiscuComponent', () => {
  let component: ChefDiscuComponent;
  let fixture: ComponentFixture<ChefDiscuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChefDiscuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChefDiscuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
