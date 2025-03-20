/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ServomotorComponent } from './servomotor.component';

describe('ServomotorComponent', () => {
  let component: ServomotorComponent;
  let fixture: ComponentFixture<ServomotorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServomotorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServomotorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
