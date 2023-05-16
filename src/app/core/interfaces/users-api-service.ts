import { Observable } from 'rxjs';
import { User } from 'src/app/shared/models/user';
import { InjectionToken } from '@angular/core';

export const IUsersApiServiceToken = new InjectionToken('IUsersApiService');

export interface IUsersApiService {
  getAll(): Observable<User[]>;

  getSubscribe(path: string): Observable<Object>;

  // add(user: User): Observable<void>;
}
