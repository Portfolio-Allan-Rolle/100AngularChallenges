import { Component, inject } from '@angular/core';
import { LoaderService } from '../../services/loader.service';

@Component({
  selector: 'app-loader',
  imports: [],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss',
})
export class LoaderComponent {
  loaderService = inject(LoaderService);
  isLoaderVisible = this.loaderService.isLoaderVisible;
  hideLoader() {
    this.loaderService.hideLoader();
  }
}
