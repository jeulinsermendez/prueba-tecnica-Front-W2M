import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';




@NgModule({
  imports: [
    CommonModule,
    LayoutModule
  ],
  declarations: [

  ],
  exports:[
    LayoutModule
  ]
})
export class CoreModule { }
