import { Component, inject, signal } from '@angular/core';
import { fadeInOutAnimation } from '../../animations/animations';
import { NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ContainerComponent } from '../../components/container/container.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-miscellaneous-documentation',
  imports: [ReactiveFormsModule, ContainerComponent, RouterLink],
  templateUrl: './miscellaneous-documentation.component.html',
  styleUrl: './miscellaneous-documentation.component.scss',
  animations: [fadeInOutAnimation],
})
export class MiscellaneousDocumentationComponent {
  private formBuilder = inject(NonNullableFormBuilder);
  form = this.formBuilder.group({
    name: [''],
  });
  onSubmit() {
    console.log(this.form.value);
    this.form.reset();
  }
  isElementVisible = signal<boolean>(false);
  onToggle() {
    this.isElementVisible.set(!this.isElementVisible());
  }
}
