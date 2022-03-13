import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SpinnerInterceptorService } from './core/interceptors/spinner.intercerptor';
import { AuthenticationService } from './services/authentication/authentication.service';
import { CookieService } from 'ngx-cookie-service';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { LayoutModule } from './layout/layout.module';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    CoreModule,
    LayoutModule,
  ],
  providers: [
    CookieService,
    AuthenticationService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SpinnerInterceptorService,
      multi: true
    }
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent],
})
export class AppModule { }
