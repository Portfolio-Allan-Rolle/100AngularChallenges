import { Component, signal } from '@angular/core';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { CardComponent } from './components/card/card.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { IAccordionItem } from './models';
import { ProgressbarComponent } from './components/progressbar/progressbar.component';

@Component({
  selector: 'app-root',
  imports: [
    ToolbarComponent,
    CardComponent,
    AccordionComponent,
    ProgressbarComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  public accordionItems: IAccordionItem[] = [
    {
      title: 'Title 1',
      content: 'I am the content of title 1',
      isExpanded: false,
    },
    {
      title: 'Title 2',
      content: 'I am the content of title 2',
      isExpanded: false,
    },
    {
      title: 'Title 3',
      content: 'I am the content of title 3',
      isExpanded: false,
    },
  ];
  public progressBarValue = signal(20);
  changeProgressBarValue() {
    this.progressBarValue.set(80);
  }
}
