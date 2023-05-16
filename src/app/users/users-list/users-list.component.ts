import { Component, OnInit } from '@angular/core';
import { Observable, Subject, map } from 'rxjs';
import { UserService } from 'src/app/core/user.service';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
})
export class UsersListComponent implements OnInit {
  public users$: Observable<User[]> | undefined;

  constructor(private readonly userService: UserService) {}

  ngOnInit() {
    this.userService.getSubscribeList();
    this.users$ = this.userService.getAllUsers();
  }

  public subscribeUser(id: string): void {
    this.userService.addSubscribe(id);
  }

  public unsubscribeUser(id: string): void {
    this.userService.deleteSubscribe(id);
  }
}
