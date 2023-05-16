import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/shared/models/user';
import { IUsersApiService } from './interfaces/users-api-service';

const host = 'https://petscomm-bb44f-default-rtdb.firebaseio.com/users';

@Injectable()
export class UsersApiService implements IUsersApiService {
  constructor(private httpClient: HttpClient) {}
  // public add(user: User): Observable<void> {
  //   return this.httpClient.post<void>(
  //     `${host}/${user.uid}.json`,
  //     JSON.stringify(user)
  //   );
  // }

  //   public delete(id: string): Observable<void> {
  //     return this.httpClient.delete<void>(`${host}/${id}`);
  //   }

  public getAll(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${host}.json`);
  }

  public getSubscribe(path: string): Observable<Object> {
    return this.httpClient.get<Object>(`${host}/${path}.json`);
  }
}
