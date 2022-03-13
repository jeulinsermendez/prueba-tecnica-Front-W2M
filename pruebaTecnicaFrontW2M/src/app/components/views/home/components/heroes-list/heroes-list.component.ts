import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
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
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroesListComponent implements OnInit {

  searchTerm: string = '';
  currentPage: number = 1;
  heros: Hero[] = [];

  showEditHero: boolean = false;
  showAddHero: boolean = false;


  constructor(
    public homeService: HomeService,
    public matDialog: MatDialog,
    private cookieService: CookieService
  ) {}

  ngOnInit(): void {


  }

  edit(hero: Hero) {

    this.showEditHero = true;

    const dialogRef = this.matDialog.open(AddHeroeComponent, {
      data: hero,
    });

    dialogRef.afterClosed().subscribe((result) => {

      if (result) {
        this.homeService.updateHero(result);
        this.showEditHero = false;
      }
    });
  }


  search() {

    this.homeService.getSerchingHeros(this.searchTerm.trim());
  }

  optionSelected(event: any) {

    if (!event.option.value) {
      return;
    }

    const hero: Hero = event.option.value;
    this.searchTerm = hero.superhero || '';
    this.homeService.searchHero(hero);

  }
}
