import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { UserService } from './user.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RegistrationService {
  readonly signUpErrMessage$ = new Subject<string>();
  constructor(
    private readonly angularfireAuth: AngularFireAuth,
    private readonly router: Router,
    private readonly userService: UserService
  ) {}

  public async signUp(
    email: string,
    password: string,
    displayName: string
  ): Promise<void> {
    return this.angularfireAuth
      .createUserWithEmailAndPassword(email, password)
      .then(userCredential => {
        if (userCredential.user) {
          this.userService.addUsers({
            uid: userCredential.user.uid,
            email: email,
            displayName: displayName,
          });
          this.router.navigate(['login']);
        }
      })
      .catch(error => {
        switch (error.code) {
          case 'auth/email-already-in-use': {
            this.signUpErrMessage$.next('email уже используется');
            break;
          }
          default:
            this.signUpErrMessage$.next('Регистрация невозможна');
        }
        console.error(error.message);
      });
  }
}
