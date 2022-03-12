import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  map,
  Observable,
  Subject,
  takeUntil,
  tap,
} from 'rxjs';
import { Hero } from 'src/app/core/models/hero.interface';
import { HeroesDataService } from 'src/app/services/heroes/heroes-data.service';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private destroy$: Subject<void> = new Subject<void>();

  heroes: BehaviorSubject<Hero[]> = new BehaviorSubject<Hero[]>([]);
  heroes$ = this.heroes.asObservable();

  hero: BehaviorSubject<Hero> = new BehaviorSubject<Hero>({});
  hero$ = this.hero.asObservable();

  selectedHero: BehaviorSubject<Hero> = new BehaviorSubject<Hero>({});
  selectedHero$ = this.selectedHero.asObservable();

  heroesSearching: BehaviorSubject<Hero[]> = new BehaviorSubject<Hero[]>([]);
  heroesSearching$ = this.heroesSearching.asObservable();

  constructor(public heroesDataService: HeroesDataService) {}

  destroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  getHeroes() {
    this.heroesDataService
      .getHeroes()
      .pipe(takeUntil(this.destroy$))
      .subscribe((hero) => {
        this.heroes.next(hero);
      });
  }

  getHeroeById(id: string) {
    return this.heroesDataService.getHeroById(id);
  }

  deleteHero(id: string) {
    this.heroesDataService.deleteHero(id).subscribe((any) => this.getHeroes());
  }

  addHero(hero: Hero) {
    this.heroesDataService.addHero(hero);
    this.getHeroes();
  }

  updateHero(hero: Hero) {
    this.heroesDataService.updateHero(hero).subscribe((h) => {
      this.getHeroes();
    });
  }

  getSerchingHeros(stringToSearch: string) {
    if (stringToSearch != '') {
      this.heroesDataService
        .getSerchingHeros(stringToSearch)
        .subscribe((heros) => {
          this.heroesSearching.next(heros);
        });
    } else {
      this.getHeroes();
    }
  }

  searchHero(hero: Hero) {
    this.getHeroeById(hero.id || '').subscribe((hero) => {
      if (hero) {
        let heroToFind = this.heroes.getValue().filter((h) => h.id === hero.id);
        this.heroes.next(heroToFind);
      }
    });
  }

  knowMore(id: string) {
    this.getHeroeById(id).subscribe((hero) => {
      this.hero.next(hero);
    });
  }
}
