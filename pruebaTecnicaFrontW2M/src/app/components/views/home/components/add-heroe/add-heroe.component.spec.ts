import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatDialog,
  MatDialogModule,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { of } from 'rxjs';
import { Hero } from 'src/app/core/models/hero.interface';

import { AddHeroeComponent } from './add-heroe.component';

describe('AddHeroeComponent', () => {
  let component: AddHeroeComponent;
  let fixture: ComponentFixture<AddHeroeComponent>;
  enum Publisher {
    DCComics = 'DC Comics',
    MarvelComics = 'Marvel Comics',
  }
  const heroMock: Hero = {
    alter_ego: 'ss',
    characters: 'ss',
    first_appearance: 'ss',
    id: 'ss',
    image: 'ss',
    superhero: 'ss',
    publisher: Publisher.MarvelComics,
  };

  const dialogMock = {
    open() {
      return {
        afterClosed: () => of(heroMock),
      };
    },
    close: () => null,
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddHeroeComponent],
      imports: [FormsModule],
    }).compileComponents();
  });
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddHeroeComponent],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: dialogMock },
      ],
      imports: [
        HttpClientTestingModule,
        MatDialogModule,
        FormsModule,
        ReactiveFormsModule,
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddHeroeComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    const publisher = component.form.get('publisher');
    publisher?.setValue(heroMock.publisher);
    expect(component).toBeTruthy();
  });

  it('should save', () => {
    let dialogRef = TestBed.inject(MatDialogRef);
    let spy = spyOn(dialogRef,'close').and.callFake(()=> null);
    component.save(heroMock);
    expect(spy).toHaveBeenCalled();
  });

  it('should processFile', () => {

    let blob = new Blob([""], { type: 'text/html' });
    let fakeFile:File = new File([blob],'');
    const file = {
      files: [
        fakeFile
      ]
    }
    component.processFile(file);
    expect(component).toBeTruthy();
  });
});
