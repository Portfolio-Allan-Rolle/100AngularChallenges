import { CanDeactivateFn } from '@angular/router';
import { MiscellaneousDocumentationComponent } from '../routes/miscellaneous-documentation/miscellaneous-documentation.component';

export const canDeactivateGuard: CanDeactivateFn<
  MiscellaneousDocumentationComponent
> = (component) => {
  const isFormDirty = component.form.dirty;
  if(isFormDirty) {
    return confirm('The form has not been submitted. Would you like to leave anyway ?');

  }
  return true;
};
