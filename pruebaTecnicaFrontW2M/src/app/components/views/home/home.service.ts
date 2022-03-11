import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Subject, takeUntil, tap } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private data: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  public data$ = this.data.asObservable();
  private destroy$: Subject<void> = new Subject<void>();

  constructor() {}






  destroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
