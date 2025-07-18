import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fileSizeConverter',
})
export class FileSizeConverterPipe implements PipeTransform {
  transform(bytes: number): string {
    if (isNaN(bytes) || bytes === 0) return '0 Bytes';

    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(1024));
    return `${parseFloat((bytes / Math.pow(1024, i)).toFixed(2))} ${sizes[i]}`;
  }
}
