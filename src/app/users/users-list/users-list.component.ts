import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/core/user.service';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersListComponent implements OnInit {
  public users$: Observable<User[]> | undefined;

  constructor(private readonly userService: UserService) {
    this.users$ = this.userService.getAllUsers();
  }

  ngOnInit() {
    this.userService.getSubscribeList();
  }

  public subscribeUser(id: string): void {
    this.userService.addSubscribe(id);
  }

  public unsubscribeUser(id: string): void {
    this.userService.deleteSubscribe(id);
  }
}
