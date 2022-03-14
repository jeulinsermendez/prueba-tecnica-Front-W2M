
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesListComponent } from './heroes-list.component';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { Directive, Input,NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatAutocompleteModule, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

import { of } from 'rxjs';
import { Hero } from 'src/app/core/models/hero.interface';
import { HomeService } from '../../home.service';


describe('HeroesListComponent', () => {
  let component: HeroesListComponent;
  let fixture: ComponentFixture<HeroesListComponent>;
  let homeService:HomeService;
  const heroMock: Hero = {
    alter_ego:'alter',
    id:'1',
    superhero:'superHero',
    image: 'aaa',
    first_appearance:' firts'
  }

  const dialogMock = {
    open() {
      return {
        afterClosed: () => of(heroMock)
      };
     }
  };



  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroesListComponent ],
      providers:[

        { provide: MatDialog,  useValue:dialogMock },
      ],
      schemas:[NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA],
      imports:[HttpClientTestingModule, MatDialogModule,RouterTestingModule,MatAutocompleteModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesListComponent);
    homeService = TestBed.inject(HomeService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should edit', () => {

    let spy = spyOn(homeService, 'updateHero').withArgs(heroMock).and.callThrough()
    component.edit(heroMock);
  expect(spy).toHaveBeenCalled();
  });


  it('should search', () => {
    component.searchTerm = 'ssd';
    const spy = spyOn(homeService, 'getSerchingHeros').withArgs('ssd').and.callThrough();
    component.search();
    expect(spy).toHaveBeenCalled();
  });
  it('should optionSelected', () => {
    const event = {
        option : {
          value: {...heroMock}
        }
    };
    const spy = spyOn(homeService, 'searchHero').withArgs(heroMock).and.callThrough();
    component.optionSelected(event);
    expect(spy).toHaveBeenCalled();
  });





});
