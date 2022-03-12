/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HeroesDataService } from './heroes-data.service';

describe('Service: HeroesData', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeroesDataService]
    });
  });

  it('should ...', inject([HeroesDataService], (service: HeroesDataService) => {
    expect(service).toBeTruthy();
  }));
});
