import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable, of } from 'rxjs';
import { COOKIES_GETTER_SETTER } from 'src/app/services/authentication/authentication.const';
import { ROUTES_CONSTANTS } from '../../constants/routes.const';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationGuard implements CanActivate {
  constructor(private cookieService: CookieService, private router: Router) {}

  canActivate(): Observable<boolean> {
    let user = this.cookieService.get(COOKIES_GETTER_SETTER.USER_LOGGED);

    if (user) return of(true);

    this.router.navigate([ROUTES_CONSTANTS.LOGIN]);
    return of(false);
  }
}
