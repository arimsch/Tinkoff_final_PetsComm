import { Component, OnInit } from '@angular/core';
import { AngularFireObject } from '@angular/fire/compat/database';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/shared/models/user';
import { UserService } from 'src/app/core/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.less'],
})
export class ProfileComponent implements OnInit {
  public user!: User;
  us!: Observable<User>;
  h!: AngularFireObject<User>;
  users: User[] = [];
  userN = 'df';

  constructor(
    private readonly route: ActivatedRoute,
    private readonly userService: UserService
  ) {
    // this.angularApiService.getDataList('users').snapshotChanges()
    // .subscribe((books) => {
    //   books.forEach((item) => {
    //     let a = item.payload.toJSON();
    //     if(a){
    //     console.log(a)
    //     this.users.push(a as User);
    //     this.userN = (a as User).email
    //     }
    //   })});
    this.userService.getAllUsers();
    // if(this.users[0].displayName)
    // this.userN = this.users[0].displayName
    // this.userService._user$;
    // this.userService.getUser().valueChanges().subscribe((data) => {
    // console.log(data)});
    // this.route.params.subscribe(params => console.log(params));
  }

  ngOnInit(): void {
    this.userService.getUserInfo('5');
    if (this.users[0].displayName) this.userN = this.users[0].displayName;
  }
}
