import { Component, input, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LoaderService } from '../../services/loader.service';

@Component({
  selector: 'app-toolbar',
  imports: [RouterLink],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss',
})
export class ToolbarComponent {
  loaderService = inject(LoaderService);
  title = input.required<string>();
  showLoader() {
    this.loaderService.showLoader();
  }
}
