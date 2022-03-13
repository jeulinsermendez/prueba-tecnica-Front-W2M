import { Component } from '@angular/core';
import { SpinnerService } from './service/spinner.service';

@Component({
  selector: 'app-spinner',
  template:`
  <div class="center" *ngIf="isLoadins$ | async">
  <div class="wave"></div>
  <div class="wave"></div>
  <div class="wave"></div>
  <div class="wave"></div>
  <div class="wave"></div>
  <div class="wave"></div>
  <div class="wave"></div>
  <div class="wave"></div>
  <div class="wave"></div>
  <div class="wave"></div>
</div>
  `,
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent {
  isLoadins$ = this.spinnerService.isLoading$;
  constructor(private spinnerService: SpinnerService) { }



}
