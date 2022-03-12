import { AfterViewInit, OnDestroy } from '@angular/core';
import { Component, OnInit, enableProdMode } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ROUTES_CONSTANTS } from 'src/app/core/constants/routes.const';
import { Hero } from 'src/app/core/models/hero.interface';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy, AfterViewInit {
  searchTerm: string = '';
  currentPage: number = 1;

  constructor(
    public homeService: HomeService,
    public matDialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit() {
    this.homeService.getHeroes();
  }

  ngAfterViewInit(): void {}

  ngOnDestroy(): void {
    this.homeService.destroy();
  }

  search() {
    this.homeService.getSerchingHeros(this.searchTerm.trim());
  }
}
