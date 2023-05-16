import { Inject, Injectable, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { BehaviorSubject, Observable, Subject, takeUntil } from 'rxjs';
import { User } from '../shared/models/user';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/core/storage.service';
import { DestroyService } from 'src/app/core/destroy.service';

@Injectable()
export class AuthService {
  private readonly _currentUser$: BehaviorSubject<User | null>;
  private readonly _authErrMessage$ = new Subject<string>();

  constructor(
    private readonly angularfireAuth: AngularFireAuth,
    private readonly storageService: StorageService,
    private readonly router: Router
  ) {
    this._currentUser$ = new BehaviorSubject(
      this.storageService.get('currentUser')
    );
  }

  public get currentUser$(): BehaviorSubject<User | null> {
    return this._currentUser$;
  }

  public get authErrMessage$(): Subject<string> {
    return this._authErrMessage$;
  }

  public async auth(email: string, password: string): Promise<void> {
    return this.angularfireAuth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        this.angularfireAuth.authState.subscribe(user => {
          if (user) {
            const currentUser: User = {
              uid: user.uid,
              email: email,
              displayName: '',
            };
            this.storageService.set('currentUser', currentUser);
            this._currentUser$.next(currentUser);
          }
        });
        this.router.navigate(['/']);
      })
      .catch(error => {
        switch (error.code) {
          case 'auth/wrong-password': {
            this.authErrMessage$.next('Неверный пароль');
            break;
          }
          default:
            this.authErrMessage$.next('Неверный email');
        }
      });
  }
}
