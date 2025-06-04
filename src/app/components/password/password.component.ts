import { Component, computed, inject, OnInit, signal } from '@angular/core';
import {
  AbstractControl,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { ProgressbarComponent } from '../progressbar/progressbar.component';
import { from, map, of } from 'rxjs';

@Component({
  selector: 'app-password',
  imports: [ReactiveFormsModule, ProgressbarComponent],
  templateUrl: './password.component.html',
  styleUrl: './password.component.scss',
})
export class PasswordComponent implements OnInit {
  public fb = inject(NonNullableFormBuilder);
  public progressBarValue = signal(4);
  public progressBarValueComputed = computed(() => {
    return 100 - this.progressBarValue() * 25;
  });

  public form = this.fb.group({
    password: [
      '',
      [
        Validators.required,
        Validators.minLength(8),
        this.containsCapitalLetterValidator(),
        this.containsDigitValidator(),
        this.containsSpecialCharactorValidator(),
      ],
    ],
  });

  containsCapitalLetterValidator(): ValidatorFn {
    return (
      control: AbstractControl<string>,
    ): { [key: string]: any } | null => {
      const containsUppercase = !/[A-Z]/.test(control.value);
      return containsUppercase
        ? { containsUppercase: { value: control.value } }
        : null;
    };
  }

  containsDigitValidator(): ValidatorFn {
    return (
      control: AbstractControl<string>,
    ): { [key: string]: any } | null => {
      const containsUppercase = !/[0-9]/.test(control.value);
      return containsUppercase
        ? { containsDigit: { value: control.value } }
        : null;
    };
  }

  containsSpecialCharactorValidator(): ValidatorFn {
    return (
      control: AbstractControl<string>,
    ): { [key: string]: any } | null => {
      const containsUppercase = !/[^A-Za-z0-9]/.test(control.value);
      return containsUppercase
        ? { containsSpecialCharacter: { value: control.value } }
        : null;
    };
  }

  isInvalidAndTouchedOrDirty(control: AbstractControl) {
    return control.invalid && (control.touched || control.dirty);
  }

  getFormControl(control: string): AbstractControl {
    return this.form.get(control) as AbstractControl;
  }

  updateProgressBar() {
    const keys = this.form.controls.password.errors;
    from(of(keys))
      .pipe(map((el) => (el ? Object.entries(el) : [])))
      .subscribe((arr) => {
        if (arr.length) {
          this.progressBarValue.set(arr.length);
        } else {
          this.progressBarValue.set(0);
        }
      });
  }

  ngOnInit(): void {
    this.form.valueChanges.subscribe({
      next: () => {
        this.updateProgressBar();
      },
    });
  }
}
