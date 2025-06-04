import { inject, Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Route, Router } from '@angular/router';
import { filter } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TitleService {
  private titleService = inject(Title);
  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);

  public init() {
    this.router.events
      .pipe(filter((event: any) => event instanceof NavigationEnd))
      .subscribe(() => {
        const data = this.activatedRoute.root.firstChild?.snapshot.data;
        const mainTitle = '100 Angular Challenges';
        const lastTitle = this.titleService.getTitle();

        if (data?.['title']) {
          const title = `${mainTitle} - ${data?.['title']}`;
          if (lastTitle != title) {
            this.titleService.setTitle(title);
          } else {
            if (lastTitle != mainTitle) {
              this.titleService.setTitle(mainTitle);
            }
          }
        }
      });
  }
}
