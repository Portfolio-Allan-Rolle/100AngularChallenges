import {
  Component,
  computed,
  inject,
  OnDestroy,
  OnInit,
  signal,
} from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { IUser } from '../../models';

@Component({
  selector: 'app-services-documentation',
  imports: [CommonModule],
  templateUrl: './services-documentation.component.html',
  styleUrl: './services-documentation.component.scss',
})
export class ServicesDocumentationComponent implements OnInit, OnDestroy {
  userService = inject(UsersService);
  usersLength = this.userService.getAllUsers();
  users$!: Subscription;
  users = signal(<IUser[]>[]);
  currentUserId = signal(1);
  currentUser = computed(() =>
    this.users().filter((user: IUser) => user.id === this.currentUserId())
  );
  error = signal<null | string>(null);

  onChangeUserId($event: Event) {
    this.currentUserId.set(+($event.target as HTMLSelectElement).value);
  }

  mapData(data: IUser[]) {
    return data.map((el: Partial<IUser>) => ({
      id: el.id,
      name: el.name,
      username: el.username,
    }));
  }

  ngOnInit(): void {
    this.users$ = this.userService.getAllUsers().subscribe({
      next: (res) => this.users.set(res),
      error: (err) => this.error.set(err.message),
      complete: () => console.log('request complete'),
    });
  }

  ngOnDestroy(): void {
    this.users$.unsubscribe();
  }
}
