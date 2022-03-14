import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material-assets.module';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { ImageNotFoundDirective } from './directives/image-not-found.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  declarations: [SpinnerComponent, ImageNotFoundDirective],
  exports:[
    MaterialModule,
    SpinnerComponent,
    ImageNotFoundDirective,

    ReactiveFormsModule,
  ]
})
export class SharedModule { }
