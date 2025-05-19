import { Component, inject } from '@angular/core';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { LoaderComponent } from './components/loader/loader.component';
import { RouterOutlet } from '@angular/router';
import { ModalService } from './services/modal.service';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [ToolbarComponent, LoaderComponent, RouterOutlet, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  isModalVisible = inject(ModalService).isModalVisible;
}
