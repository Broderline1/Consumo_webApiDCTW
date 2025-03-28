/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Recover_passwordComponent } from './recover_password.component';

describe('Recover_passwordComponent', () => {
  let component: Recover_passwordComponent;
  let fixture: ComponentFixture<Recover_passwordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Recover_passwordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Recover_passwordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
