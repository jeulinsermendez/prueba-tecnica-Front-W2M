

import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import {  NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutBasicComponent } from './layout-basic.component';



@NgModule({
  imports: [CommonModule, RouterModule, SharedModule],
  declarations: [ LayoutBasicComponent],
  exports: [LayoutBasicComponent],

})
export class LayoutModule {}
