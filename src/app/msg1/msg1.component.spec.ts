import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Msg1Component } from './msg1.component';

describe('Msg1Component', () => {
  let component: Msg1Component;
  let fixture: ComponentFixture<Msg1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Msg1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Msg1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
