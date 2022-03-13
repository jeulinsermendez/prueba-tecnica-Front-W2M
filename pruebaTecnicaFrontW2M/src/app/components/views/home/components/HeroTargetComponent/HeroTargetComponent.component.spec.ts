import { HttpClientTestingModule } from '@angular/common/http/testing';
/* tslint:disable:no-unused-variable */
import {  ComponentFixture, TestBed } from '@angular/core/testing';


import { HeroTargetComponentComponent } from './HeroTargetComponent.component';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { Hero } from 'src/app/core/models/hero.interface';
import { ROUTES_CONSTANTS } from 'src/app/core/constants/routes.const';
import { HeroeComponent } from '../heroe/heroe.component';

describe('HeroTargetComponentComponent', () => {
  let component: HeroTargetComponentComponent;
  let fixture: ComponentFixture<HeroTargetComponentComponent>;

  const heroMock: Hero = {
    alter_ego: 'ss',
    characters: 'ss',
    first_appearance: 'ss',
    id: 'ss',
    image: 'ss',
    superhero: 'ss',
  };

  const dialogMock = {
    open() {
      return {
        afterClosed: () => of(heroMock)
      };
     }
  };

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [ HeroTargetComponentComponent ],
      providers:[
        { provide: MatDialog,  useValue:dialogMock },
      ],
      imports:[HttpClientTestingModule, MatDialogModule,RouterTestingModule.withRoutes([
        {path: `${ROUTES_CONSTANTS.HOME.path}${ROUTES_CONSTANTS.HERO.route}/${heroMock.id}`, component:HeroeComponent}
      ])]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroTargetComponentComponent);
    component = fixture.componentInstance;
    component.hero = heroMock;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should edit', () => {
    let spy = spyOn(component,'edit').and.callThrough();
    component.edit();
    expect(spy).toHaveBeenCalled();
  });

  it('should goToSaberMas', () => {
    let spy = spyOn(component,'goToSaberMas').and.callThrough();
    component.goToSaberMas();
    expect(spy).toHaveBeenCalled();
  });



});
