/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LayoutBasicComponent } from './layout-basic.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthenticationService } from '../services/authentication/authentication.service';
import { of } from 'rxjs';
import { ROUTES_CONSTANTS } from '../core/constants/routes.const';
import { HomeComponent } from '../components/views/home/home.component';
import { Router } from '@angular/router';
import { LoginComponent } from '../components/views/login/login.component';

describe('LayoutBasicComponent', () => {
  let component: LayoutBasicComponent;
  let fixture: ComponentFixture<LayoutBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutBasicComponent ],
      imports:[HttpClientTestingModule, RouterTestingModule.withRoutes([
        {
          path: `${ROUTES_CONSTANTS.ABOUT.path}`, component:HomeComponent
        },
        {
          path: `${ROUTES_CONSTANTS.HOME.path}`, component:HomeComponent
        },
        {
          path: `${ROUTES_CONSTANTS.LOGIN.path}`, component:LoginComponent
        },
        {
          path: `${ROUTES_CONSTANTS.HOME.path}/${ROUTES_CONSTANTS.LIST.path}`, component:LoginComponent
        },
      ])],
      providers: [AuthenticationService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {

    expect(component).toBeTruthy();
  });

  it('should logout', () => {
    const service = TestBed.inject(AuthenticationService);
    const spy = spyOn(service, 'logout').and.callFake(()=> of(true));
    component.logout();
    expect(spy).toHaveBeenCalled();
  });

  it('should goToAbout', () => {
    const route = TestBed.inject(Router);
    const spy = spyOn(route, 'navigate');
    component.goToAbout();
    expect(spy).toHaveBeenCalled();
  });
  it('should goToHome', () => {
    const route = TestBed.inject(Router);
    const spy = spyOn(route, 'navigate');
    component.goToHome();
    expect(spy).toHaveBeenCalled();
  });
});
