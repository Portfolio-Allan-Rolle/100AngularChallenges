import { CommonModule } from '@angular/common';
import { Component, input, model, OnInit, computed, signal } from '@angular/core';

enum Cards {
  VISA = 'visa',
  MASTERCARD = 'mastercard',
  DISCOVER = 'discover',
  GENERIC = 'generic',
}

@Component({
  selector: 'app-credit-card-input',
  imports: [CommonModule],
  templateUrl: './credit-card-input.component.html',
  styleUrl: './credit-card-input.component.scss',
})
export class CreditCardInputComponent implements OnInit {
  isReadOnly = input.required();
  cardNumber = model('');
  cardNumberFormatted = signal('');

  cardBrand = computed(() => {
    const firstDigit = this.cardNumber().charAt(0);
    if (firstDigit == '3') {
      return Cards.VISA;
    } else if (firstDigit == '4') {
      return Cards.MASTERCARD;
    } else if (firstDigit == '6') {
      return Cards.DISCOVER;
    }
    return Cards.GENERIC;
  });

  ngOnInit(): void {
    if (this.isReadOnly()) {
      this.formatDisplayForReadOnly();
    }
  }

  formatDisplayForReadOnly() {
    const newFormat = `XXXX-XXXX-XXXX-${this.cardNumber().slice(12)}`;
    this.cardNumberFormatted.set(newFormat);
  }
}
