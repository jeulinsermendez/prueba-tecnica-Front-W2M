import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    SharedModule,

  ],
  declarations: [
    LoginComponent
  ],

  exports:[LoginComponent]
})
export class LoginModule { }
