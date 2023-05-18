import { Inject, Injectable } from '@angular/core';
import { User } from '../shared/models/user';
import { AuthService } from '../auth/auth.service';
import { BehaviorSubject, Observable, Subject, map } from 'rxjs';
import {
  IUsersApiService,
  IUsersApiServiceToken,
} from './interfaces/i-users-api-service';

@Injectable()
export class UserService {
  private _userId: string;
  private readonly _currentUser$ = new BehaviorSubject<User | null>(null);
  public readonly userSubscribeList$ = new BehaviorSubject<Object>({});

  constructor(
    @Inject(IUsersApiServiceToken)
    private readonly usersApiService: IUsersApiService,
    private readonly authService: AuthService
  ) {
    this._userId = this.authService.currentUser$.value?.uid || '';
    this.getUser(this._userId).subscribe(user => (this._currentUser$.next(user)));
  }

  public get userId(): string {
    return this._userId;
  }

  public get currentUser$(): BehaviorSubject<User|null>{
    return this._currentUser$;
  }

  public getUser(id: string): Observable<User> {
    return this.usersApiService.getUser(id);
  }

  public getAllUsers(): Observable<User[]> {
    return this.usersApiService
      .getAllUsers()
      .pipe(
        map(el => Object.values(el).filter(user => user.uid !== this._userId))
      );
  }

  public getSubscribeList(): void {
    this.usersApiService.getAllSubscribes(this._userId).subscribe(data => {
      if (data) {
        this.userSubscribeList$.next(data);
      } else {
        this.userSubscribeList$.next({});
      }
    });
  }

  public addUserWithUid(user: User): void {
    this.usersApiService.addUser(user).subscribe();
  }

  public addSubscribe(id: string): void {
    this.usersApiService
      .addSubsctribe(this._userId, id)
      .subscribe(() => this.getSubscribeList());
  }

  public deleteSubscribe(id: string): void {
    this.usersApiService
      .deleteSubsctribe(this._userId, id)
      .subscribe(() => this.getSubscribeList());
  }

  public userSubscribeStatus(id: string): boolean {
    return this.userSubscribeList$.value.hasOwnProperty(id);
  }
}
