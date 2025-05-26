import { Component, inject } from '@angular/core';
import { BottomSheetService } from '../../services/bottom-sheet.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bottom-sheet',
  imports: [CommonModule],
  templateUrl: './bottom-sheet.component.html',
  styleUrl: './bottom-sheet.component.scss',
})
export class BottomSheetComponent {
  public bottomSheetService = inject(BottomSheetService);
}
