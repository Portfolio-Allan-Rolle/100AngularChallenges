import { Component, input } from '@angular/core';

@Component({
  selector: 'app-banner-cut-out',
  imports: [],
  templateUrl: './banner-cut-out.component.html',
  styleUrl: './banner-cut-out.component.scss'
})
export class BannerCutOutComponent {
  title = input.required();
}
