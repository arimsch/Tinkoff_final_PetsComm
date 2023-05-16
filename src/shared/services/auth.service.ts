import { Injectable, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { User } from '../models/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  readonly loginErrMessage$ = new Subject<string>();

  private readonly currentUser$ = new BehaviorSubject<User | null>(null);

  constructor(
    private readonly angularfireAuth: AngularFireAuth,
    private readonly router: Router
  ) {
    this.initLocalStorage();
  }

  public get _currentUser$(): BehaviorSubject<User | null> {
    return this.currentUser$;
  }

  public async login(email: string, password: string): Promise<void> {
    return this.angularfireAuth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        this.angularfireAuth.authState.subscribe(user => {
          if (user) {
            const currentUser: User = {
              uid: user.uid,
              email: email,
            };
            localStorage.setItem('currentUser', JSON.stringify(currentUser));
            this.currentUser$.next(currentUser);
            this.router.navigate(['/']);
          }
        });
      })
      .catch(error => {
        switch (error.code) {
          case 'auth/wrong-password': {
            this.loginErrMessage$.next('Неверный пароль');
            break;
          }
          default:
            this.loginErrMessage$.next('Неверный email');
        }
      });
  }

  private initLocalStorage(): void {
    const userInLocalSt = localStorage.getItem('currentUser');
    if (userInLocalSt) {
      this.currentUser$.next(JSON.parse(userInLocalSt));
    }
  }
}
