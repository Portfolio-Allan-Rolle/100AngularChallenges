import { Component, inject, input, OnInit } from '@angular/core';
import { SnackBarService } from '../../services/snack-bar.service';
import { delay, distinctUntilChanged, of, Subscription } from 'rxjs';

@Component({
  selector: 'app-snack-bar',
  imports: [],
  templateUrl: './snack-bar.component.html',
  styleUrl: './snack-bar.component.scss',
})
export class SnackBarComponent {
  readonly message = input.required();
  readonly snackBarService = inject(SnackBarService);
  isVisible = this.snackBarService.isVisible;
}
