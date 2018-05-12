import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefNotifComponent } from './chef-notif.component';

describe('ChefNotifComponent', () => {
  let component: ChefNotifComponent;
  let fixture: ComponentFixture<ChefNotifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChefNotifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChefNotifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
