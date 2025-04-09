import { Component, inject, input } from '@angular/core';
import { LoaderService, loaderType } from '../../services/loader.service';

@Component({
  selector: 'app-loader',
  imports: [],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss',
})
export class LoaderComponent {
  loaderService = inject(LoaderService);
  isLoaderVisible = this.loaderService.isLoaderVisible;
  enum: typeof loaderType = loaderType;
  loaderType = input(loaderType.CIRCULAR);
  hideLoader() {
    this.loaderService.hideLoader();
  }
}
