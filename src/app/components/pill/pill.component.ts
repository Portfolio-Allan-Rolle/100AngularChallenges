import { Component, input, OnInit } from '@angular/core';
import { pillType } from '../../models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pill',
  imports: [CommonModule],
  templateUrl: './pill.component.html',
  styleUrl: './pill.component.scss',
})
export class PillComponent implements OnInit {
  label = input.required<string>();
  type = input.required<string>();
  icon = input<string>();
  enumPillType: typeof pillType = pillType;

  ngOnInit(): void {
    console.log(this.enumPillType.PRIMARY);
  }
}
