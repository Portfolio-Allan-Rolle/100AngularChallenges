import {
  Component,
  computed,
  inject,
  OnDestroy,
  OnInit,
  signal,
} from '@angular/core';
import { UsersService } from '../../services/users.service';
import { filter, map, mergeMap, startWith, Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { IUser } from '../../models';
import { SnackBarService } from '../../services/snack-bar.service';
import { SnackBarComponent } from '../../components/snack-bar/snack-bar.component';
import { ContainerComponent } from '../../components/container/container.component';
import { LocalStorageService } from '../../services/local-storage.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-services-documentation',
  imports: [CommonModule, SnackBarComponent, ContainerComponent],
  templateUrl: './services-documentation.component.html',
  styleUrl: './services-documentation.component.scss',
})
export class ServicesDocumentationComponent implements OnInit, OnDestroy {
  localStorageService = inject(LocalStorageService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  data$ = this.localStorageService.data$;
  snackBarService = inject(SnackBarService);
  userService = inject(UsersService);
  usersLength = this.userService.getAllUsers();
  users$!: Subscription;
  users = signal(<IUser[]>[]);
  currentUserId = signal(1);
  currentUser = computed(() =>
    this.users().filter((user: IUser) => user.id === this.currentUserId()),
  );
  error = signal<null | string>(null);
  userExample = signal<IUser[]>([]);

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

  showSnackBar(message: string) {
    this.snackBarService.animateSnackBar(message);
  }

  updateLocalStorageState() {
    this.localStorageService.setItem('state', { name: 'allan' });
  }

  switchPage() {
    const randomId = Math.floor(Math.random() * 10) + 1;
    this.router.navigate(['/services', randomId]);
  }

  ngOnInit(): void {
    this.users$ = this.userService.getAllUsers().subscribe({
      next: (res) => this.users.set(res),
      error: (err) => this.error.set(err.message),
      complete: () => console.log('request complete'),
    });
    this.route.params
      .pipe(
        filter((params) => params['id'] != null),
        map((params) => params['id']),
        mergeMap((id) => this.userService.getUser(id)),
      )
      .subscribe((user) => this.userExample.set(user));
  }

  ngOnDestroy(): void {
    this.users$.unsubscribe();
  }
}
