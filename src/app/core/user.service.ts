import { Inject, Injectable } from '@angular/core';
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/compat/database';
import { User } from '../shared/models/user';
import { AuthService } from '../auth/auth.service';
import { BehaviorSubject, Observable, Subject, map } from 'rxjs';
import {
  IUsersApiService,
  IUsersApiServiceToken,
} from './interfaces/users-api-service';

@Injectable()
export class UserService {
  private userId: string;
  public readonly userSubscribeList$ = new BehaviorSubject<Object>({});

  public getAllUsers(): Observable<User[]> {
    return this.usersApiService
      .getAll()
      .pipe(
        map(el => Object.values(el).filter(user => user.uid !== this.userId))
      );
  }

  public getSubscribeList(): void {
    let path = `${this.userId}/subscribe`;
    this.usersApiService.getSubscribe(path).subscribe(data => {
      if (data) {
        this.userSubscribeList$.next(data);
      } else {
        this.userSubscribeList$.next({});
      }
    });
  }

  public addUserWithUid(user: User): void {
    this.angularFireDatabase.database.ref('users/' + user.uid).set(user);
  }

  public addSubscribe(id: string): void {
    this.angularFireDatabase.database
      .ref(`users/${this.userId}/subscribe/` + id)
      .set(true)
      .then(() => this.getSubscribeList());
  }

  public deleteSubscribe(id: string): void {
    this.angularFireDatabase.database
      .ref(`users/${this.userId}/subscribe/` + id)
      .remove()
      .then(() => this.getSubscribeList());
  }

  public userSubscribeStatus(id: string): boolean {
    return this.userSubscribeList$.value.hasOwnProperty(id);
  }

  private _userPath = 'users/';
  private _usersList: User[] = [];

  // public addUser(user: User): void {
  //   this.usersApiService.add(user).subscribe( (val) => {
  //     console.log("POST call successful value returned in body",
  //                 val);
  // });
  // }

  readonly itemsDB$ = new Subject<User[]>();
  users$: Observable<User[]> | undefined;

  userRef!: AngularFireObject<any>;
  // public users: User[] | null = null;

  public user$!: BehaviorSubject<User>;

  private _users: User[] = [];
  private _summary = 0;

  constructor(
    @Inject(IUsersApiServiceToken)
    private readonly usersApiService: IUsersApiService,
    private readonly authService: AuthService,
    private readonly angularFireDatabase: AngularFireDatabase
  ) {
    this.userId = this.authService.currentUser$.value?.uid || '';
  }

  // get users(): User[] {
  //   return this.users$;
  // }

  public get _user$() {
    return this.user$;
  }

  public get usersList() {
    return this._usersList;
  }

  // public getUsersList(): User[]{
  //   this.fireDatabaseService.getDataList(this._userPath).snapshotChanges()
  //   .subscribe((users) => {
  //     users.forEach((user) => {
  //       let userObject = user.payload.toJSON();
  //       if(userObject){
  //       this._usersList.push(userObject as User);
  //       }
  //     })});
  //     return this._usersList;
  // }

  // public getUser(): AngularFireObject<User> {
  //   const itemPath =  `${this._userPath}/${this.userId}`;
  //   this.userRef = this.angularFireDatabase.object(itemPath);
  //   return this.userRef;
  // }

  public getUserInfo(uid: string) {
    console.log(this.userId);
  }
}
