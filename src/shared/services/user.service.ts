import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private readonly angularFireDatabase: AngularFireDatabase) { }

  public AddUsers(user: User) {
    this.angularFireDatabase.database.
    ref('users/'+ user.uid).set({
      email: user.email,
      displayName: user.displayName
    });    
  }
}
