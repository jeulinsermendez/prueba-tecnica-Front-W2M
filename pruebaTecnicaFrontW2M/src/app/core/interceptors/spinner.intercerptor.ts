import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { finalize, Observable} from 'rxjs';
import { SpinnerService } from 'src/app/shared/components/spinner/service/spinner.service';

@Injectable()
export class SpinnerInterceptorService implements HttpInterceptor {
  constructor(private spinnerService: SpinnerService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

      this.spinnerService.show();
      return next.handle(req).pipe(

        finalize(()=>this.spinnerService.hide())
      )
  }
}
