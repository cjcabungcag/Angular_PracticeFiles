import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Enroll2Component } from './enroll2.component';

describe('Enroll2Component', () => {
  let component: Enroll2Component;
  let fixture: ComponentFixture<Enroll2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Enroll2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Enroll2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
