/* tslint:disable:no-unused-variable */

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed, inject } from '@angular/core/testing';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { User } from 'src/app/core/models/user.model';
import { environment } from 'src/environments/environment';
import { COOKIES_GETTER_SETTER } from './authentication.const';
import { AuthenticationService } from './authentication.service';

describe('Service: Authentication', () => {

  let service: AuthenticationService;
  let httpMock: HttpTestingController;

  const user: User = {
    email: 'jeulinsermendez@gmail.com',
    password: '1234',
    id:1,
    usuario:'jeulinser'
    }
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthenticationService, CookieService],
      imports:[HttpClientTestingModule]
    });
  });
  beforeEach(() => {
    service = TestBed.inject(AuthenticationService);
    httpMock = TestBed.inject(HttpTestingController);
  });
  afterAll(()=>{
    httpMock.verify();
  });

  it('should ...', inject([AuthenticationService], (service: AuthenticationService) => {
    expect(service).toBeTruthy();
  }));

  it('should login', inject([AuthenticationService], (service: AuthenticationService) => {
    service.login(user).subscribe(user =>{

      expect(service.login).toHaveBeenCalled();
    });
    const req = httpMock.expectOne(`${environment.API}${environment.ENDPOINT_USERS}`);
    expect(req.request.method).toBe('GET');
  }));
  it('should logout', inject([AuthenticationService], (service: AuthenticationService) => {

    const cookiesService = TestBed.inject(CookieService);
    const spy = spyOn(cookiesService, 'delete').withArgs(COOKIES_GETTER_SETTER.USER_LOGGED).and.callThrough();

    service.logout();
    expect(spy).toHaveBeenCalled();

  }));
});
