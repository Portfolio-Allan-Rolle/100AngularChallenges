import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'richText',
})
export class RichTextPipe implements PipeTransform {
  transform(htmlString: string): unknown {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, 'application/xml');
    const errorNode = doc.querySelector('parsererror')?.textContent;

    if (errorNode) {
      throw new Error(errorNode);
    } else if (doc.firstChild?.textContent?.length == 0) {
      throw new Error('Invalid HTML input - empty content');
    } else {
      return doc.firstChild?.textContent;
    }
  }
}
