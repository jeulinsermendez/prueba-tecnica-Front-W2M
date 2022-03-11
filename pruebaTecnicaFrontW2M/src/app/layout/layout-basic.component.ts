import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTES_CONSTANTS } from '../core/constants/routes.const';
import { AuthenticationService } from '../services/authentication/authentication.service';
//import { AuthenticationService } from 'src/app/services/authentication/authentication.service';

@Component({
  selector: 'app-layout-basic',
  templateUrl: './layout-basic.component.html',
  styleUrls: ['./layout-basic.component.scss']
})
export class LayoutBasicComponent implements OnInit {
  showFiller = false;

  constructor(private authenticationService: AuthenticationService,  private router: Router ) { }

  ngOnInit() {
  }

  logout(){
    this.authenticationService.logout();
    this.router.navigate([ROUTES_CONSTANTS.LOGIN.route]);
  }
  goToAbout(){
    this.router.navigate([ROUTES_CONSTANTS.ABOUT.route]);
  }
  goToHome(){
    this.router.navigate([ROUTES_CONSTANTS.HOME.route]);
  }

}
