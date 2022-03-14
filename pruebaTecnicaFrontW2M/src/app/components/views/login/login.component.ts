import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  form: FormGroup;

  constructor(public authenticationService: AuthenticationService,private router: Router,
    private fb: FormBuilder) {
      this.form = fb.group({
        email: ['', Validators.required],
        password: [ '', Validators.required],
      });
    }

  ngOnInit() {
  }

  login(value: User){
    this.authenticationService.login(value).subscribe(response => {
      this.router.navigate([ROUTES_CONSTANTS.HOME.route]);
    });
  }

}
