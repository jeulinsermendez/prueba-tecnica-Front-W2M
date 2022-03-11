import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTES_CONSTANTS } from 'src/app/core/constants/routes.const';
import { User } from 'src/app/core/models/user.model';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public authenticationService: AuthenticationService,private router: Router) { }
  user: User = {

  };

  ngOnInit() {
  }

  login(){
    this.authenticationService.login(this.user).subscribe(response => {
     // if(!response) return;
      this.router.navigate([ROUTES_CONSTANTS.HOME.route]);
    });
  }

}