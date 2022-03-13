/* tslint:disable:no-unused-variable */

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, async, inject } from '@angular/core/testing';
import { HeroesDataService } from './heroes-data.service';

describe('Service: HeroesData', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeroesDataService],
      imports:[HttpClientTestingModule]
    });
  });

  it('should ...', inject([HeroesDataService], (service: HeroesDataService) => {
    expect(service).toBeTruthy();
  }));
});
