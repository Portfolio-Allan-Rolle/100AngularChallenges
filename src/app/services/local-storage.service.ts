import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  private readonly stateKey = 'state';
  private state!: { [key: string]: any };
  data$ = new BehaviorSubject<{ [key: string]: any } | string>(
    'Hello from BehaviorSubject !',
  );

  setItem(key: string, value: { [key: string]: any }): void {
    this.state = { ...this.state, [key]: value };
    localStorage.setItem(this.stateKey, JSON.stringify(this.state));
    this.data$.next(this.state);
  }

  getItem() {
    return JSON.parse(localStorage.getItem(this.stateKey) || '{}');
  }

  removeItem(): void {
    localStorage.removeItem(this.stateKey);
  }

  clear(): void {
    localStorage.clear();
  }
}
