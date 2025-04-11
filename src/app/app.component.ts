import { Component } from '@angular/core';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { LoaderComponent } from './components/loader/loader.component';

import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [ToolbarComponent, LoaderComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
