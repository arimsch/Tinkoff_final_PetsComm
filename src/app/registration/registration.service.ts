import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { UserService } from '../core/user.service';
import { Subject } from 'rxjs';

@Injectable()
export class RegistrationService {
  private readonly _registrationErrMessage$ = new Subject<string>();
  constructor(
    private readonly angularfireAuth: AngularFireAuth,
    private readonly router: Router,
    private readonly userService: UserService
  ) {}

  public get registrationErrMessage$(): Subject<string> {
    return this._registrationErrMessage$;
  }
  public async registration(
    email: string,
    password: string,
    displayName: string
  ): Promise<void> {
    return this.angularfireAuth
      .createUserWithEmailAndPassword(email, password)
      .then(userCredential => {
        if (userCredential.user) {
          this.userService.addUserWithUid({
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
            this._registrationErrMessage$.next('email уже используется');
            break;
          }
          default:
            this._registrationErrMessage$.next('Регистрация невозможна');
        }
        console.error(error.message);
      });
  }
}
