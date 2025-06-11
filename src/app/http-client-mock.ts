import { Observable, of } from 'rxjs';

export class HttpClientMock {
  public lastUrl = '';
  public lastOptions!: { [key: string]: any } | undefined;
  public response!: { [key: string]: any };

  public get(url: string, options?: { [key: string]: any }): Observable<any> {
    this.lastUrl = url;
    this.lastOptions = options;
    return of(this.response);
  }
}
