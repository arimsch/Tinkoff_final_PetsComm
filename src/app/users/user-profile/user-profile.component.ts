import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserService } from 'src/app/core/user.service';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserProfileComponent {
  public toggleEditProf = false;

  constructor(private readonly userService: UserService) {}

  public get user$(): BehaviorSubject<User> {
    return this.userService.currentUser$;
  }

  public startEditProfile(): void {
    this.toggleEditProf = !this.toggleEditProf;
  }

  public updateUserData(userData: object | null): void {
    if (userData) {
      this.userService.updateUserData(userData);
    }
    this.startEditProfile();
  }

  public exitProfile(): void {
    this.userService.exit();
  }
}
