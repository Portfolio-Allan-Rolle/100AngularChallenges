import { trigger, style, animate, transition } from '@angular/animations';

export const modalAnimation = trigger('openClose', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('1s ease-in', style({ opacity: 1 })),
  ]),
]);
