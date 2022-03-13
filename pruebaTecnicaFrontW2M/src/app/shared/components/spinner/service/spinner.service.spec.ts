/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SpinnerService } from './spinner.service';

describe('Service: Spinner', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpinnerService]
    });
  });

  it('should ...', inject([SpinnerService], (service: SpinnerService) => {
    expect(service).toBeTruthy();
  }));

  it('should show', inject([SpinnerService], (service: SpinnerService) => {
    service.show();
    expect(service).toBeTruthy();
  }));
  it('should hide', inject([SpinnerService], (service: SpinnerService) => {
    service.hide();
    expect(service).toBeTruthy();
  }));
});
