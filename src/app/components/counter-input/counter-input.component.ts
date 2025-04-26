import {
  AfterViewInit,
  Component,
  ElementRef,
  input,
  model,
  ViewChild,
} from '@angular/core';

enum Counter {
  DEFAULT_MIN = 2,
  DEFAULT_MAX = 15,
}

@Component({
  selector: 'app-counter-input',
  imports: [],
  templateUrl: './counter-input.component.html',
  styleUrl: './counter-input.component.scss',
})
export class CounterInputComponent implements AfterViewInit {
  min = input<number>(Counter.DEFAULT_MIN);
  max = input<number>(Counter.DEFAULT_MAX);
  value = model<number>(0);
  @ViewChild('input') input!: ElementRef;
  inputNativeEl!: HTMLInputElement;

  ngAfterViewInit(): void {
    this.inputNativeEl = this.input.nativeElement;
  }

  onDecreaseValue() {
    if (this.value() > this.min()) {
      this.inputNativeEl.stepDown();
      this.value.set(+this.inputNativeEl.value);
    }
  }

  onIncreaseValue() {
    if (this.value() < this.max()) {
      this.inputNativeEl.stepUp();
      this.value.set(+this.inputNativeEl.value);
    }
  }
}
