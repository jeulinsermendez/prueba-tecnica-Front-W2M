
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesListComponent } from './heroes-list.component';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { Directive, Input,NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

import { of } from 'rxjs';
import { Hero } from 'src/app/core/models/hero.interface';


describe('HeroesListComponent', () => {
  let component: HeroesListComponent;
  let fixture: ComponentFixture<HeroesListComponent>;
  const hero: Hero = {
    alter_ego:'alter',
    id:'1',
    superhero:'superHero',
    image: 'aaa',
    first_appearance:' firts'
  }

  const dialogMock = {
    afterClosed : () => { }
  };



  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroesListComponent ],
      providers:[

        { provide: MatDialogRef, useValue: dialogMock },
      ],
      schemas:[NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA],
      imports:[HttpClientTestingModule, MatDialogModule,RouterTestingModule,MatAutocompleteModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should edit', () => {




  });

  it('should search', () => {
    //spyOn(component, 'search').and.callFake

    component.search();
  });
  it('should add', () => {
    //spyOn(component, 'search').and.callFake

    component.add();
  });


});
