import { Component, input, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LoaderService } from '../../services/loader.service';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-toolbar',
  imports: [RouterLink],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss',
})
export class ToolbarComponent {
  loaderService = inject(LoaderService);
  modalService = inject(ModalService);
  title = input.required<string>();
  showLoader() {
    this.loaderService.showLoader();
  }
}
