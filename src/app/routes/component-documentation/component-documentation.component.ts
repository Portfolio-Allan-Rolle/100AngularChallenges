import { Component, inject, signal } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { AccordionComponent } from '../../components/accordion/accordion.component';
import { ProgressbarComponent } from '../../components/progressbar/progressbar.component';
import { StarRatingComponent } from '../../components/star-rating/star-rating.component';
import { TopOfPageComponent } from '../../components/top-of-page/top-of-page.component';
import { IAccordionItem, pillType } from '../../models';
import { CreditCardInputComponent } from '../../components/credit-card-input/credit-card-input.component';
import { TwitterPostComponent } from '../../components/twitter-post/twitter-post.component';
import { LinkedinPostComponent } from '../../components/linkedin-post/linkedin-post.component';
import { ModalComponent } from '../../components/modal/modal.component';
import { QuoteComponent } from '../../components/quote/quote.component';
import { ToggleComponent } from '../../components/toggle/toggle.component';
import { RichTextViewerComponent } from '../../components/rich-text-viewer/rich-text-viewer.component';
import { DebounceSearchComponent } from '../../components/debounce-search/debounce-search.component';
import { SearchListComponent } from '../../components/search-list/search-list.component';
import { CounterInputComponent } from '../../components/counter-input/counter-input.component';
import { SimpleTableComponent } from '../../components/simple-table/simple-table.component';
import { TabsComponent } from '../../components/tabs/tabs.component';
import { SortTableComponent } from '../../components/sort-table/sort-table.component';
import { EmailFormComponent } from '../../components/email-form/email-form.component';
import { RibbonComponent } from '../../components/ribbon/ribbon.component';
import { ribbonPosition, ribbonType } from '../../models';
import { ButtonToggleComponent } from '../../components/button-toggle/button-toggle.component';
import { IButtonGroup } from '../../models';
import { BannerCutOutComponent } from '../../components/banner-cut-out/banner-cut-out.component';
import { SnackBarComponent } from '../../components/snack-bar/snack-bar.component';
import { SnackBarService } from '../../services/snack-bar.service';
import { PopUpComponent } from '../../components/pop-up/pop-up.component';
import { CountdownTimerComponent } from '../../components/countdown-timer/countdown-timer.component';
import { ContinentDropdrownComponent } from '../../components/continent-dropdrown/continent-dropdrown.component';
import { SkeletonDirective } from '../../directives/skeleton.directive';
import { SocialMediaBarComponent } from '../../components/social-media-bar/social-media-bar.component';
import { BottomSheetComponent } from '../../components/bottom-sheet/bottom-sheet.component';
import { BottomSheetService } from '../../services/bottom-sheet.service';
import { FieldsetToggleComponent } from '../../components/fieldset-toggle/fieldset-toggle.component';
import { PillComponent } from '../../components/pill/pill.component';
import { ContainerComponent } from '../../components/container/container.component';
import { PillFiltersComponent } from '../../components/pill-filters/pill-filters.component';
import { PasswordComponent } from "../../components/password/password.component";

@Component({
  selector: 'app-component-documentation',
  imports: [
    PillFiltersComponent,
    FieldsetToggleComponent,
    BottomSheetComponent,
    SkeletonDirective,
    ContinentDropdrownComponent,
    CounterInputComponent,
    SnackBarComponent,
    CardComponent,
    AccordionComponent,
    ProgressbarComponent,
    StarRatingComponent,
    TopOfPageComponent,
    CreditCardInputComponent,
    TwitterPostComponent,
    LinkedinPostComponent,
    ModalComponent,
    QuoteComponent,
    ToggleComponent,
    RichTextViewerComponent,
    DebounceSearchComponent,
    SearchListComponent,
    CounterInputComponent,
    SimpleTableComponent,
    TabsComponent,
    SortTableComponent,
    EmailFormComponent,
    RibbonComponent,
    ButtonToggleComponent,
    BannerCutOutComponent,
    PopUpComponent,
    CountdownTimerComponent,
    SocialMediaBarComponent,
    PillComponent,
    ContainerComponent,
    PasswordComponent
],
  templateUrl: './component-documentation.component.html',
  styleUrl: './component-documentation.component.scss',
})
export class ComponentDocumentationComponent {
  public bottomSheetService = inject(BottomSheetService);
  public buttonGroupData: IButtonGroup[] = [
    { id: 1, title: 'Bold', isActive: false },
    { id: 2, title: 'Italic', isActive: false },
    { id: 3, title: 'Underline', isActive: false },
  ];

  enumRibbonPosition: typeof ribbonPosition = ribbonPosition;
  enumRibbonType: typeof ribbonType = ribbonType;
  enumPillType: typeof pillType = pillType;

  public dataForTabs: any[] = [
    TwitterPostComponent,
    ToggleComponent,
    LinkedinPostComponent,
  ];

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
  quote =
    "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best";
  quoteAuthor = 'Marilyn Monroe';
  quoteOccupation = 'Actress/Model';

  debounceSearch = signal('');
  onSearch(searchTerm: string) {
    this.debounceSearch.set(searchTerm);
  }

  dataSearch = ['Firefox', 'Chrome', 'Edge', 'Safari', 'Opera', 'Brave'];

  minCounterInput = 5;
  maxCounterInput = 10;

  dataForSimpleTable = [
    { name: 'Leanne Graham', username: 'Bret', email: 'Sincere@april.biz' },
    { name: 'Ervin Howell', username: 'Antonette', email: 'Shanna@melissa.tv' },
    {
      name: 'Clementine Bauch',
      username: 'Samantha',
      email: 'Nathan@yesenia.net',
    },
    {
      name: 'Patricia Lebsack',
      username: 'Karianne',
      email: 'Julianne.OConner@kory.org',
    },
    {
      name: 'Chelsey Dietrich',
      username: 'Kamren',
      email: 'Lucio_Hettinger@annie.ca',
    },
  ];

  dataForSortTable = [
    { name: 'Sarah Hard', age: 63, dob: '10/08/97', living: false },
    { name: 'Leanne Graham', age: 23, dob: '10/08/89', living: true },
    { name: 'Michelle Russell', age: 43, dob: '10/08/60', living: true },
    { name: 'Victor Smith', age: 53, dob: '10/08/75', living: false },
    { name: 'Sean Paul', age: 33, dob: '10/08/90', living: true },
  ];

  public readonly snackBarService = inject(SnackBarService);

  showSnackBar(message: string) {
    this.snackBarService.animateSnackBar(message);
  }
}
