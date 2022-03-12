import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  NavigationEnd,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Subject } from 'rxjs';
import { switchMap, filter, takeUntil } from 'rxjs/operators';
import { ROUTES_CONSTANTS } from 'src/app/core/constants/routes.const';
import { HomeService } from '../../home.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css'],
})
export class HeroeComponent implements OnInit {
  private destroy$: Subject<void> = new Subject();
  constructor(
    private activatedRoute: ActivatedRoute,
    public homeService: HomeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(takeUntil(this.destroy$))
      .subscribe(({ id }) => {
        this.homeService.knowMore(id);
      });
  }
  ngOnDestroy(): void {
    this.homeService.destroy();
    this.destroy$.next();
    this.destroy$.complete();
  }

  comeBack() {
    this.homeService.getHeroes();
    this.router.navigate([
      `${ROUTES_CONSTANTS.HOME.route}${ROUTES_CONSTANTS.LIST.route}`,
    ]);
  }
}
