import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  isModalVisible = signal(false);

  openModal() {
    this.isModalVisible.set(true);
  }

  closeModal() {
    this.isModalVisible.set(false);
  }
}
