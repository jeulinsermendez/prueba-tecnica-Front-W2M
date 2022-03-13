/* tslint:disable:no-unused-variable */

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, async, inject } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { Hero } from 'src/app/core/models/hero.interface';
import { HeroesDataService } from 'src/app/services/heroes/heroes-data.service';
import { HomeService } from './home.service';

describe('Service: Home', () => {
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
  const heroMock: Hero = {
    alter_ego: 'ss',
    characters: 'ss',
    first_appearance: 'ss',
    id: 'ss',
    image: 'ss',
    superhero: 'ss',
  };
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HomeService],
      imports: [HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    });
  });

  it('should getHeroes', inject([HomeService], (service: HomeService) => {
    const heroDataService = TestBed.inject(HeroesDataService);
    let spy = spyOn(heroDataService, 'getHeroes').and.returnValue(of(herosMock));
    service.getHeroes();
    expect(spy).toHaveBeenCalled();
  }));

  it('should getHeroeById', inject([HomeService], (service: HomeService) => {
    const heroDataService = TestBed.inject(HeroesDataService);
    let spy = spyOn(heroDataService, 'getHeroById')
      .withArgs('ss')
      .and.returnValue(of(heroMock));
    service.getHeroeById('ss');
    expect(spy).toHaveBeenCalled();
  }));

  it('should deleteHero', inject([HomeService], (service: HomeService) => {
    const heroDataService = TestBed.inject(HeroesDataService);
    let spy = spyOn(heroDataService, 'deleteHero')
      .withArgs('ss')
      .and.returnValue(of(heroMock));
    service.deleteHero('ss');
    expect(spy).toHaveBeenCalled();
  }));

  it('should addHero', inject([HomeService], (service: HomeService) => {
    const heroDataService = TestBed.inject(HeroesDataService);
    spyOn(heroDataService, 'addHero').withArgs(heroMock);
    service.addHero(heroMock);
    expect(service).toBeTruthy();
  }));

  it('should updateHero', inject([HomeService], (service: HomeService) => {
    const heroDataService = TestBed.inject(HeroesDataService);
    let spy = spyOn(heroDataService, 'updateHero')
      .withArgs(heroMock)
      .and.returnValue(of(heroMock));
    service.updateHero(heroMock);
    expect(spy).toHaveBeenCalled();
  }));

  it('should getSerchingHeros with search', inject(
    [HomeService],
    (service: HomeService) => {
      const heroDataService = TestBed.inject(HeroesDataService);
     let spy = spyOn(heroDataService, 'getSerchingHeros')
        .withArgs('s')
        .and.returnValue(of(herosMock));
      service.getSerchingHeros('s');
      expect(spy).toHaveBeenCalled();
    }
  ));

  it('should getSerchingHeros non search', inject(
    [HomeService],
    (service: HomeService) => {
      const heroDataService = TestBed.inject(HeroesDataService);

      spyOn(heroDataService, 'getSerchingHeros')
        .withArgs('')
        .and.returnValue(of(herosMock));

      let spy = spyOn(service, 'getHeroes');

      service.getSerchingHeros('');

      expect(spy).toHaveBeenCalled();
    }
  ));

  it('should searchHero', inject([HomeService], (service: HomeService) => {
    const heroDataService = TestBed.inject(HeroesDataService);

    let spy1 = spyOn(service, 'getHeroeById')
      .withArgs('ss')
      .and.returnValue(of(heroMock));
    spyOn(heroDataService, 'getHeroById')
      .withArgs('ss')
      .and.returnValue(of(heroMock));
    service.searchHero(heroMock);

    expect(spy1).toHaveBeenCalled();
  }));

  it('should knowMore', inject([HomeService], (service: HomeService) => {
    const heroDataService = TestBed.inject(HeroesDataService);

    let spy1 = spyOn(service, 'getHeroeById')
      .withArgs('ss')
      .and.returnValue(of(heroMock));
    spyOn(heroDataService, 'getHeroById')
      .withArgs('ss')
      .and.returnValue(of(heroMock));
    service.knowMore('ss');
    expect(spy1).toHaveBeenCalled();
  }));
});
