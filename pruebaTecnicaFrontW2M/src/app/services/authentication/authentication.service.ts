import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import {  map, Observable, of } from 'rxjs';
import { User } from 'src/app/core/models/user.model';
import { environment } from 'src/environments/environment';
import { COOKIES_GETTER_SETTER } from './authentication.const';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(
    public httpClient: HttpClient,
    private cookieService: CookieService
  ) {

  }

  login(user: User): Observable<any> {
    return this.httpClient
      .get<any>(`${environment.API}${environment.ENDPOINT_USERS}`)
      .pipe(
        map((response: User[]) => {
          if (!response) return false;

          let userLogged = response.find(
            (u) => u.email === user.email && u.password === user.password
          );
          if (!userLogged) return false;

          this.cookieService.set(COOKIES_GETTER_SETTER.USER_LOGGED, JSON.stringify(userLogged));
          return true;
        })
      );
  }

  logout() {
    this.cookieService.delete(COOKIES_GETTER_SETTER.USER_LOGGED);
    return of(false);
  }
}
