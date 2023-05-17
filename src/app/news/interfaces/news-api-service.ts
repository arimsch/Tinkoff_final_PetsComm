import { Observable } from 'rxjs';
import { User } from 'src/app/shared/models/user';
import { InjectionToken } from '@angular/core';
import { News } from '../models/news';

export const INewsApiServiceToken = new InjectionToken('INewsApiService');

export interface INewsApiService {
    addNews(news: News): Observable<void>;
//   getAllUsers(): Observable<User[]>;

//   getAllSubscribes(curUserId: string): Observable<Object>;

//   addUser(user: User): Observable<User>;

//   addSubsctribe(curUserId: string, id: string): Observable<Object>;

//   deleteSubsctribe(curUserId: string, id: string): Observable<void>;
  
}