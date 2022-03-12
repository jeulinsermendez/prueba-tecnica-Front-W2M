import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material-assets.module';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { ImageNotFoundDirective } from './directives/image-not-found.directive';



@NgModule({
  imports: [
    CommonModule,
    MaterialModule

  ],
  declarations: [SpinnerComponent, ImageNotFoundDirective],
  exports:[
    MaterialModule,
    SpinnerComponent,
    ImageNotFoundDirective
  ]
})
export class SharedModule { }
