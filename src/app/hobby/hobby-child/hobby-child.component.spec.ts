import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HobbyChildComponent } from './hobby-child.component';

describe('HobbyChildComponent', () => {
  let component: HobbyChildComponent;
  let fixture: ComponentFixture<HobbyChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HobbyChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HobbyChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
