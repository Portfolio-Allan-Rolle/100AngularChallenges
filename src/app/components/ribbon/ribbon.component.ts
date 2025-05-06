import { Component, model } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ribbonPosition, ribbonType } from '../../models';

@Component({
  selector: 'app-ribbon',
  imports: [CommonModule],
  templateUrl: './ribbon.component.html',
  styleUrl: './ribbon.component.scss',
})
export class RibbonComponent {
  enumRibbonPosition: typeof ribbonPosition = ribbonPosition;
  enumRibbonType: typeof ribbonType = ribbonType;
  ribbonPosition = model();
  ribbonType = model();
}
