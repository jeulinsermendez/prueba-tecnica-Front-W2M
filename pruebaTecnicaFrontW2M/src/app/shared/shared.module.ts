import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material-assets.module';
import { SpinnerComponent } from './components/spinner/spinner.component';



@NgModule({
  imports: [
    CommonModule,
    MaterialModule

  ],
  declarations: [SpinnerComponent],
  exports:[
    MaterialModule,
    SpinnerComponent
  ]
})
export class SharedModule { }
