import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../shared/models/user';

const host = 'https://petscomm-bb44f-default-rtdb.firebaseio.com/users';

@Injectable()
export class RegistrationApiService {
  constructor(private readonly httpClient: HttpClient) {}

  public addUser(user: User): Observable<User> {
    return this.httpClient.put<User>(`${host}/${user.uid}.json`, user);
  }
}
