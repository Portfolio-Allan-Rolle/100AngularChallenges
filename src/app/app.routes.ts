import { Route } from '@angular/router';
import { canDeactivateGuard } from './guards/can-deactivate.guard';

export const routes: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import(
        './routes/component-documentation/component-documentation.component'
      ).then((m) => m.ComponentDocumentationComponent),
    data: {
      title: 'Component',
    },
  },
  {
    path: 'directives',
    loadComponent: () =>
      import(
        './routes/directives-documentation/directives-documentation.component'
      ).then((m) => m.DirectivesDocumentationComponent),
    data: {
      title: 'Directives',
    },
  },
  {
    path: 'services/:id',
    loadComponent: () =>
      import(
        './routes/services-documentation/services-documentation.component'
      ).then((m) => m.ServicesDocumentationComponent),
    data: {
      title: 'Services',
    },
  },
  {
    path: 'services',
    loadComponent: () =>
      import(
        './routes/services-documentation/services-documentation.component'
      ).then((m) => m.ServicesDocumentationComponent),
    data: {
      title: 'Services',
    },
  },
  {
    path: 'pipes',
    loadComponent: () =>
      import('./routes/pipes-documentation/pipes-documentation.component').then(
        (m) => m.PipesDocumentationComponent,
      ),
    data: {
      title: 'Pipes',
    },
  },
  {
    path: 'miscellaneous',
    loadComponent: () =>
      import(
        './routes/miscellaneous-documentation/miscellaneous-documentation.component'
      ).then((m) => m.MiscellaneousDocumentationComponent),
    canDeactivate: [canDeactivateGuard],
    data: {
      title: 'Miscellaneous',
    },
  },
  {
    path: '**',
    loadComponent: () =>
      import('./routes/not-found/not-found.component').then(
        (m) => m.NotFoundComponent,
      ),
  },
];
