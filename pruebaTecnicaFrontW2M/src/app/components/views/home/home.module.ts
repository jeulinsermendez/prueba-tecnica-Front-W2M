import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoreModule } from 'src/app/core/core.module';



@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule,
    CoreModule
  ],
  declarations: [HomeComponent],
  exports:[HomeComponent]
})
export class HomeModule { }
