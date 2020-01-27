import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Enroll1Component } from './enroll1.component';

describe('Enroll1Component', () => {
  let component: Enroll1Component;
  let fixture: ComponentFixture<Enroll1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Enroll1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Enroll1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
