import { Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BottomSheetService {
  isOverlayVisible = signal(false);
  isModalVisible = signal(false);
  canDisplayBottomSheetModal$ = new BehaviorSubject(false);

  setModal(): void {
    this.canDisplayBottomSheetModal$.next(true);
    this.canDisplayBottomSheetModal$.subscribe({
      next: () => {
        this.isModalVisible.set(true);
        this.isOverlayVisible.set(true);
      },
    });
  }

  hideModal(): void {
    this.canDisplayBottomSheetModal$.next(false);
    this.canDisplayBottomSheetModal$.subscribe({
      next: () => {
        this.isModalVisible.set(false);
        this.isOverlayVisible.set(false);
      },
    });
  }
}
