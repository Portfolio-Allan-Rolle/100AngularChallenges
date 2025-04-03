import { Route } from '@angular/router';
import { ComponentDocumentationComponent } from './routes/component-documentation/component-documentation.component';
import { DirectivesDocumentationComponent } from './routes/directives-documentation/directives-documentation.component';
import { ServicesDocumentationComponent } from './routes/services-documentation/services-documentation.component';
import { PipesDocumentationComponent } from './routes/pipes-documentation/pipes-documentation.component';
import { MiscellaneousDocumentationComponent } from './routes/miscellaneous-documentation/miscellaneous-documentation.component';

export const routes: Route[] = [
  { path: '', component: ComponentDocumentationComponent },
  { path: 'directives', component: DirectivesDocumentationComponent },
  { path: 'services', component: ServicesDocumentationComponent },
  { path: 'pipes', component: PipesDocumentationComponent },
  { path: 'miscellaneous', component: MiscellaneousDocumentationComponent },
];
