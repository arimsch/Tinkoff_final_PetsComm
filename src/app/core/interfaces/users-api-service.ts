import { Observable } from 'rxjs';
import { User } from 'src/app/shared/models/user';
import { InjectionToken } from '@angular/core';

export const IUsersApiServiceToken = new InjectionToken('IUsersApiService');

export interface IUsersApiService {
  getAllUsers(): Observable<User[]>;

  getAllSubscribes(curUserId: string): Observable<Object>;

  addUser(user: User): Observable<User>;

  addSubsctribe(curUserId: string, id: string): Observable<Object>;

  deleteSubsctribe(curUserId: string, id: string): Observable<void>;
  
}
