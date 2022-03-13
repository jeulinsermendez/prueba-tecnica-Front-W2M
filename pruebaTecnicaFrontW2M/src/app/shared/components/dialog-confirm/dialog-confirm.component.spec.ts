/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DialogConfirmComponent } from './dialog-confirm.component';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { of } from 'rxjs';

describe('DialogConfirmComponent', () => {
  let component: DialogConfirmComponent;
  let fixture: ComponentFixture<DialogConfirmComponent>;

  const dialogMock = {
    close: () => null

  };
  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [ DialogConfirmComponent ],
      imports:[MatDialogModule],
      providers:[{ provide: MatDialogRef, useValue: dialogMock },]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should confirm', () => {
    const  dialogRef = TestBed.inject(MatDialogRef);
    const spy = spyOn(dialogRef, 'close');
    component.confirm();
    expect(spy).toBeTruthy();
  });
  it('should cancel', () => {
    const  dialogRef = TestBed.inject(MatDialogRef);
    const spy = spyOn(dialogRef, 'close');
    component.cancel();
    expect(spy).toBeTruthy();
  });
});
