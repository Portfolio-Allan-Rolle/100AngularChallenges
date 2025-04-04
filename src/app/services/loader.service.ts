import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  isLoaderVisible = signal(false);

  showLoader() {
    this.isLoaderVisible.set(true);
  }

  hideLoader() {
    this.isLoaderVisible.set(false);
  }
}
