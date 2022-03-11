import { Component } from '@angular/core';
import { SpinnerService } from './service/spinner.service';

@Component({
  selector: 'app-spinner',
  template:`
    <div class="overlay" *ngIf="isLoadins$ | async">
    <mat-progress-bar mode="indeterminate"></mat-progress-bar>
    </div>
  `,
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent {
  isLoadins$ = this.spinnerService.isLoading$;
  constructor(private spinnerService: SpinnerService) { }



}
