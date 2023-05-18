import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../shared/models/user';
import { UserService } from '../core/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersComponent {
  // public user$: Observable<User> | undefined;

  // constructor(private readonly userService: UserService){
  //   this.user$ = this.userService._currentUser$;
  // }
}
