/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LoginComponent } from './login.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { ROUTES_CONSTANTS } from 'src/app/core/constants/routes.const';
import { HomeComponent } from '../home/home.component';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { User } from 'src/app/core/models/user.model';
import { of } from 'rxjs';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  const user: User = {
    email: 'jeulinsermendez@gmail.com',
    id: 1,
    password: '1234',
    usuario: 'jeulinser',
  };
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([
          {
            path: ROUTES_CONSTANTS.HOME.path,
            component: HomeComponent,
          },
        ]),
        FormsModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {

      expect(component)
      .toBeTruthy();
  });
  it('should login', () => {
    const authenticationService = TestBed.inject(AuthenticationService);
    const spy = spyOn(authenticationService, 'login').and.returnValue(of(user));
    component.login();
      expect(spy)
      .toHaveBeenCalled();
  });
});
