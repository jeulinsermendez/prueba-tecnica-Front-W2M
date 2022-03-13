import { AfterViewInit, OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
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
