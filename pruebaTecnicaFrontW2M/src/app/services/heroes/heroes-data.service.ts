import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from 'src/app/core/models/hero.interface';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class HeroesDataService {
  private url: string = environment.API;
  constructor(private http: HttpClient) {}

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(`${this.url}heroes`);
  }
  getHeroById(id: string): Observable<Hero> {
    return this.http.get<Hero>(
      `${environment.API}${environment.ENDPOINT_HEROS}/${id}`
    );
  }

  getSerchingHeros(stringToSearch: string): Observable<Hero[]> {
    return this.http.get<Hero[]>(
      `${environment.API}${environment.ENDPOINT_HEROS}?q=${stringToSearch}&_limit=5`
    );
  }

  addHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(
      `${environment.API}${environment.ENDPOINT_HEROS}`,
      hero
    );
  }
  updateHero(hero: Hero): Observable<Hero> {
    return this.http.put<Hero>(
      `${environment.API}${environment.ENDPOINT_HEROS}/${hero.id}`,
      hero
    );
  }

  deleteHero(id: string): Observable<any> {
    return this.http.delete<any>(
      `${environment.API}${environment.ENDPOINT_HEROS}/${id}`
    );
  }
}
