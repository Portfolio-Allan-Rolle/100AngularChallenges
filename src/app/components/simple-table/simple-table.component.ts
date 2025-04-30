import { KeyValuePipe } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-simple-table',
  imports: [KeyValuePipe],
  templateUrl: './simple-table.component.html',
  styleUrl: './simple-table.component.scss',
})
export class SimpleTableComponent {
  data = input<any[]>([]);
}
