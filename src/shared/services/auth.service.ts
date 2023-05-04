import { Injectable, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { BehaviorSubject, Subject } from 'rxjs';
import { User } from '../models/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  readonly currentUser$ = new BehaviorSubject<User | null>(null);

  readonly loginErrMessage$ = new Subject<string>();

  constructor(
    private readonly angularfireAuth: AngularFireAuth,
    private readonly router: Router
  ) {
    this.initLocalStorage();
  }

  public async login(email: string, password: string) {
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
    let localStorageUser = JSON.parse(
      JSON.stringify(localStorage.getItem('currentUser'))
    );
    if (localStorageUser) {
      const currentUser: User = {
        uid: localStorageUser.uid,
        email: localStorageUser.email
      };
      this.currentUser$.next(currentUser);
    }
  }
}
