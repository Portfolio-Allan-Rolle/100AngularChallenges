/*

import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot, CanDeactivateFn, RouterStateSnapshot } from '@angular/router';

import { canDeactivateGuard } from './can-deactivate.guard';
import { MiscellaneousDocumentationComponent } from '../routes/miscellaneous-documentation/miscellaneous-documentation.component';
import { Router } from '@angular/router';

fdescribe('canDeactivateGuard', () => {
  let router!: Router;
  let routerMock: RouterStateSnapshot = router.routerState.snapshot;
  const executeGuard: CanDeactivateFn<boolean> = () =>
    TestBed.runInInjectionContext(() =>
      canDeactivateGuard(MiscellaneousDocumentationComponent, routerMock),
    );

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
*/
