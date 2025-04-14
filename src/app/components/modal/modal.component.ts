import { Component, inject, input, signal } from '@angular/core';
import { ModalService } from '../../services/modal.service';
import { modalAnimation } from '../../animations/animations';

@Component({
  selector: 'app-modal',
  imports: [],
  animations: [modalAnimation],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
})
export class ModalComponent {
  modalService = inject(ModalService);
  modalTitle = input.required();
  isOpen = signal(true);
}
