import { AfterViewInit, OnDestroy } from '@angular/core';
import { Component, OnInit ,enableProdMode} from '@angular/core';
import { Router } from '@angular/router';
import { ROUTES_CONSTANTS } from 'src/app/core/constants/routes.const';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy, AfterViewInit{
  constructor(public homeService: HomeService,
    public authenticationService: AuthenticationService,
    private router: Router) {}

  ngOnInit() {
  }

  ngAfterViewInit(): void {
  }

  ngOnDestroy(): void {
    this.homeService.destroy();
  }





}
