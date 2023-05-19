import { Observable } from 'rxjs';
import { User } from 'src/app/shared/models/user';
import { InjectionToken } from '@angular/core';

export const IUsersApiServiceToken = new InjectionToken('IUsersApiService');

export interface IUsersApiService {
  getAllUsers(): Observable<User[]>;

  getAllSubscribes(curUserId: string): Observable<Object>;

  getUser(id: string): Observable<User>;

  addUser(user: User): Observable<User>;

  addUserNews(curUserId: string, id: string): Observable<void>;

  addUserComment(curUserId: string, id: string): Observable<void>

  addSubsctribe(curUserId: string, id: string): Observable<void>;

  deleteSubsctribe(curUserId: string, id: string): Observable<void>;

  updateData(curUserId: string, newData: object): Observable<object>
}
