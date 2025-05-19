import { trigger, style, animate, transition } from '@angular/animations';

export const modalAnimation = trigger('openClose', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('1s ease-in', style({ opacity: 1 })),
  ]),
]);

export const fadeInOutAnimation = trigger('fadeInOut', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('1s ease-in', style({ opacity: 1 })),
  ]),
  transition(':leave', [
    style({ opacity: 1 }),
    animate('1s ease-in', style({ opacity: 0 })),
  ]),
]);


