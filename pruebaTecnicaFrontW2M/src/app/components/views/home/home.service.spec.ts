/* tslint:disable:no-unused-variable */

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, async, inject } from '@angular/core/testing';
import { HomeService } from './home.service';

describe('Service: Home', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HomeService],
      imports:[HttpClientTestingModule]
    });
  });

  it('should ...', inject([HomeService], (service: HomeService) => {
    expect(service).toBeTruthy();
  }));
});
