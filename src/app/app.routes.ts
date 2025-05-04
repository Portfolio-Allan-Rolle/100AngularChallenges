import { Route } from '@angular/router';
import { canDeactivateGuard } from './guards/can-deactivate.guard';

export const routes: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import(
        './routes/component-documentation/component-documentation.component'
      ).then((m) => m.ComponentDocumentationComponent),
  },
  {
    path: 'directives',
    loadComponent: () =>
      import(
        './routes/directives-documentation/directives-documentation.component'
      ).then((m) => m.DirectivesDocumentationComponent),
  },
  {
    path: 'services',
    loadComponent: () =>
      import(
        './routes/services-documentation/services-documentation.component'
      ).then((m) => m.ServicesDocumentationComponent),
  },
  {
    path: 'pipes',
    loadComponent: () =>
      import('./routes/pipes-documentation/pipes-documentation.component').then(
        (m) => m.PipesDocumentationComponent
      ),
  },
  {
    path: 'miscellaneous',
    loadComponent: () =>
      import(
        './routes/miscellaneous-documentation/miscellaneous-documentation.component'
      ).then((m) => m.MiscellaneousDocumentationComponent),
      canDeactivate: [canDeactivateGuard]
  },
];
