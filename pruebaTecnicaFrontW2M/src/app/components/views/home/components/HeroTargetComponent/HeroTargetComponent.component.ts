import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ROUTES_CONSTANTS } from 'src/app/core/constants/routes.const';
import { Hero } from 'src/app/core/models/hero.interface';
import { DialogConfirmComponent } from 'src/app/shared/components/dialog-confirm/dialog-confirm.component';
import { HomeService } from '../../home.service';

@Component({
  selector: 'app-HeroTargetComponent',
  templateUrl: './HeroTargetComponent.component.html',
  styleUrls: ['./HeroTargetComponent.component.css'],
})
export class HeroTargetComponentComponent implements OnInit {
  @Input() hero!: Hero;
  @Input() isAdmin!: boolean;
  @Output() public heroToEdit: EventEmitter<Hero> = new EventEmitter<Hero>();
  @Output() public heroToDeletet: EventEmitter<Hero> = new EventEmitter<Hero>();
  constructor(
    public homeService: HomeService,
    public matDialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit() {}

  edit() {
    this.heroToEdit.emit(this.hero);
  }

  deleteHero() {
    this.heroToDeletet.emit(this.hero);
  }
  goToSaberMas() {
    this.router.navigate([
      `${ROUTES_CONSTANTS.HOME.route}${ROUTES_CONSTANTS.HERO.route}/${this.hero.id}`,
    ]);
  }
}
