import { Component } from '@angular/core';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { CardComponent } from './components/card/card.component';


@Component({
  selector: 'app-root',
  imports: [ToolbarComponent, CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
 
}
