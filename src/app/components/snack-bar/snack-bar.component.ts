import { Component, inject, input } from '@angular/core';
import { SnackBarService } from '../../services/snack-bar.service';

@Component({
  selector: 'app-snack-bar',
  imports: [],
  templateUrl: './snack-bar.component.html',
  styleUrl: './snack-bar.component.scss',
})
export class SnackBarComponent {
  readonly snackBarService = inject(SnackBarService);
}
