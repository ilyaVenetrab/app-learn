import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { delay, filter, mergeMap, Observable, of } from 'rxjs';

@Injectable()
export class PreloadService implements PreloadingStrategy {
  public preload(route: Route, fn: () => Observable<any>): Observable<any> {
    return of(route).pipe(
      delay(5000),
      mergeMap((r: Route) => {
        console.log(r);
        return fn();
      }),
    );
  }
}
