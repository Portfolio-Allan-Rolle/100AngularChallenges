import { Injectable, signal } from '@angular/core';

export enum loaderType {
  CIRCULAR = 'CIRCULAR',
  TEXT = 'TEXT',
}

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
