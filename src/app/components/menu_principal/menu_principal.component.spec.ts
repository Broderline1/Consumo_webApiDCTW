/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Menu_principalComponent } from './menu_principal.component';

describe('Menu_principalComponent', () => {
  let component: Menu_principalComponent;
  let fixture: ComponentFixture<Menu_principalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Menu_principalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Menu_principalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
