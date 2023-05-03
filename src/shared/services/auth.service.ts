import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private readonly angularfireAuth: AngularFireAuth,) {}

  public async signIn(email: string, password: string) {
    return this.angularfireAuth
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        this.angularfireAuth.authState.subscribe((user) => {
          if (user) {
          }
        });
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  }
}
