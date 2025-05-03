import { Component, inject, signal } from '@angular/core';
import {
  NonNullableFormBuilder,
  Validators,
  AbstractControl,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-email-form',
  imports: [ReactiveFormsModule],
  templateUrl: './email-form.component.html',
  styleUrl: './email-form.component.scss',
})
export class EmailFormComponent {
  private formBuilder = inject(NonNullableFormBuilder);
  public formValue = signal<any>('');

  form = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.maxLength(100)],
  });

  isInvalidAndTouchedOrDirty(control: AbstractControl) {
    return control.invalid && (control.touched || control.dirty);
  }

  getFormControl(control: string): AbstractControl {
    return this.form.get(control) as AbstractControl;
  }

  onSubmit() {
    this.form.markAllAsTouched();
    if (!this.form.invalid) {
      this.formValue.set(this.form.value);
      this.form.reset();
      setTimeout(() => this.formValue.set(''), 1000);
    }
  }
}
