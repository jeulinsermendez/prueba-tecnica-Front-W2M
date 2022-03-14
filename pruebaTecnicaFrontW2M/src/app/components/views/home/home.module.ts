import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoreModule } from 'src/app/core/core.module';
import { HomeService } from './home.service';
import { HeroesDataService } from 'src/app/services/heroes/heroes-data.service';
import { HeroesListComponent } from './components/heroes-list/heroes-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HeroeComponent } from './components/heroe/heroe.component';
import { HeroTargetComponentComponent } from './components/HeroTargetComponent/HeroTargetComponent.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AddHeroeComponent } from './components/add-heroe/add-heroe.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule,
    CoreModule,
    FlexLayoutModule,
    FormsModule
  ],
  declarations: [
    HomeComponent,
    HeroesListComponent,
    HeroeComponent,
    HeroTargetComponentComponent,
    AddHeroeComponent
  ],
  exports: [HomeComponent],
  providers: [HomeService, HeroesDataService],
})
export class HomeModule {}
