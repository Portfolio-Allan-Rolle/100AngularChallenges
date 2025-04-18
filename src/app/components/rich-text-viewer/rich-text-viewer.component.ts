import { Component, input, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-rich-text-viewer',
  imports: [],
  templateUrl: './rich-text-viewer.component.html',
  styleUrl: './rich-text-viewer.component.scss',
})
export class RichTextViewerComponent implements OnInit {
  html = input.required<string>();
  outputHTML = signal('');
  readonly regex = new RegExp(
    /<(\w+)(?: \w+ ?= ?("|')?.*\2 ?)*(?:(?:>(?:.*)<\/\1>)|(?:\/>))/
  );

  ngOnInit(): void {
    if (this.regex.test(this.html())) {
      this.outputHTML.set(this.html());
    }
  }
}
