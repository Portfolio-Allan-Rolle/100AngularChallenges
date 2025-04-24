import { Component, input, model } from '@angular/core';

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
export class CounterInputComponent {
  min = input<number>(Counter.DEFAULT_MIN);
  max = input<number>(Counter.DEFAULT_MAX);
  value = model<number>(0);

  onDecreaseValue() {
    if (this.value() == Counter.DEFAULT_MIN) {
      return;
    } else if (this.value() > this.min()) {
      this.value.set(this.value() - 1);
    }
  }

  onIncreaseValue() {
    if (this.value() == Counter.DEFAULT_MAX) {
      this.value.set(this.min());
    } else if (this.value() < this.max()) {
      this.value.set(this.value() + 1);
    }
  }
}
