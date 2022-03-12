import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';

import { HomeService } from '../../home.service';
import { Hero } from 'src/app/core/models/hero.interface';
import { AddHeroeComponent } from '../add-heroe/add-heroe.component';
import { CookieService } from 'ngx-cookie-service';
import { User } from 'src/app/core/models/user.model';
import { COOKIES_GETTER_SETTER } from 'src/app/services/authentication/authentication.const';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { DialogConfirmComponent } from 'src/app/shared/components/dialog-confirm/dialog-confirm.component';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css'],
})
export class HeroesListComponent implements OnInit {
  searchTerm: string = '';
  currentPage: number = 1;
  heros: Hero[] = [];

  user: User = {};

  constructor(
    public homeService: HomeService,
    public matDialog: MatDialog,
    private cookieService: CookieService
  ) {}

  ngOnInit(): void {
    this.user = JSON.parse(
      this.cookieService.get(COOKIES_GETTER_SETTER.USER_LOGGED)
    );
  }

  edit(hero: Hero) {
    const dialogRef = this.matDialog.open(AddHeroeComponent, {
      data: hero,
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.homeService.updateHero(result);
      }
    });
  }
  deleteHero(hero: Hero) {
    const dialogRef = this.matDialog.open(DialogConfirmComponent);
    dialogRef.afterClosed().subscribe((result) => {
      if (result === true) {
        this.homeService.deleteHero(hero.id || '');
      }
    });
  }

  add() {
    const dialogRef = this.matDialog.open(AddHeroeComponent);
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.homeService.addHero(result);
      }
    });
  }

  search() {
    this.homeService.getSerchingHeros(this.searchTerm.trim());
  }

  optionSelected(event: MatAutocompleteSelectedEvent) {
    if (!event.option.value) {
      return;
    }
    const hero: Hero = event.option.value;
    this.searchTerm = hero.superhero || '';
    this.homeService.searchHero(hero);
  }
}
