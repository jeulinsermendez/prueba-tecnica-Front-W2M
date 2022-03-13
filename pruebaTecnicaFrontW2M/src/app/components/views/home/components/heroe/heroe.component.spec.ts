import { ActivatedRoute } from '@angular/router';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroeComponent } from './heroe.component';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { HomeService } from '../../home.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Hero } from 'src/app/core/models/hero.interface';
import { of } from 'rxjs';
import { ROUTES_CONSTANTS } from 'src/app/core/constants/routes.const';
import { HeroesListComponent } from '../heroes-list/heroes-list.component';

describe('HeroeComponent', () => {
  let component: HeroeComponent;
  let fixture: ComponentFixture<HeroeComponent>;

  const herosMock: Hero[] = [
    {
      alter_ego: 'ss',
      characters: 'ss',
      first_appearance: 'ss',
      id: 'ss',
      image: 'ss',
      superhero: 'ss',
    },
    {
      alter_ego: '',
      characters: '',
      first_appearance: '',
      id: '',
      image: '',
      superhero: '',
    },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroeComponent],
      imports:[BrowserDynamicTestingModule, RouterTestingModule.withRoutes([
        {
          path: `${ROUTES_CONSTANTS.HOME.path}${ROUTES_CONSTANTS.LIST.route}`, component:HeroesListComponent
        }
      ]),HttpClientTestingModule],
      providers:[HomeService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {

    expect(component).toBeTruthy();
  });
  it('should comeBack', () => {
    const homeService = TestBed.inject(HomeService);
    let spy = spyOn(homeService,'getHeroes').and.callFake(()=>null);
    component.comeBack();
    expect(component).toBeTruthy();
    expect(spy).toHaveBeenCalled();
  });

});
