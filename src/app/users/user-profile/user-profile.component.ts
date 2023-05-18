import { ChangeDetectionStrategy, Component } from '@angular/core';
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
  public user!: User;

  constructor(private readonly userService: UserService){
    this.userService.currentUser$.subscribe((user)=>{
    if(user){
      this.user = user
    }
  });
  }

  public startEditProfile():void{
    this.toggleEditProf = !this.toggleEditProf;
  }
}
