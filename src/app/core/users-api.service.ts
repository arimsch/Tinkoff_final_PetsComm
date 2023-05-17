import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/shared/models/user';
import { IUsersApiService } from './interfaces/users-api-service';

const host = 'https://petscomm-bb44f-default-rtdb.firebaseio.com/users';
const pathSubsctribe = '/subscribe';

@Injectable()
export class UsersApiService implements IUsersApiService {
  constructor(private httpClient: HttpClient) {}

  public getAllUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${host}.json`);
  }

  public getAllSubscribes(curUserId: string): Observable<Object> {
    return this.httpClient.get<Object>(
      `${host}/${curUserId}/${pathSubsctribe}.json`
    );
  }

  public addUser(user: User): Observable<User> {
    return this.httpClient.put<User>(`${host}/${user.uid}.json`, user);
  }

  public addSubsctribe(curUserId: string, id: string): Observable<Object> {
    return this.httpClient.put<User>(
      `${host}/${curUserId}/${pathSubsctribe}/${id}.json`,
      true
    );
  }

  public deleteSubsctribe(curUserId: string, id: string): Observable<void> {
    return this.httpClient.delete<void>(
      `${host}/${curUserId}/${pathSubsctribe}/${id}.json`
    );
  }
}
