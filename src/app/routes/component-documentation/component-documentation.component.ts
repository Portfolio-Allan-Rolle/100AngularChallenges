import { Component, signal } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { AccordionComponent } from '../../components/accordion/accordion.component';
import { ProgressbarComponent } from '../../components/progressbar/progressbar.component';
import { StarRatingComponent } from '../../components/star-rating/star-rating.component';
import { TopOfPageComponent } from '../../components/top-of-page/top-of-page.component';
import { IAccordionItem } from '../../models';
import { CreditCardInputComponent } from '../../components/credit-card-input/credit-card-input.component';
import { TwitterPostComponent } from '../../components/twitter-post/twitter-post.component';

@Component({
  selector: 'app-component-documentation',
  imports: [
    CardComponent,
    AccordionComponent,
    ProgressbarComponent,
    StarRatingComponent,
    TopOfPageComponent,
    CreditCardInputComponent,
    TwitterPostComponent,
  ],
  templateUrl: './component-documentation.component.html',
  styleUrl: './component-documentation.component.scss',
})
export class ComponentDocumentationComponent {
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
