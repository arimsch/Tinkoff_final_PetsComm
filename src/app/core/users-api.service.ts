import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { User } from 'src/app/shared/models/user';
import { IUsersApiService } from './interfaces/i-users-api-service';

const host = 'https://petscomm-bb44f-default-rtdb.firebaseio.com/users';
const pathSubsctribe = '/subscribe';
const pathNews = '/news';
const pathComments = '/comments';

@Injectable()
export class UsersApiService implements IUsersApiService {
  constructor(private readonly httpClient: HttpClient) {}

  public getAllUsers(): Observable<User[]> {
    return this.httpClient
      .get<User[]>(`${host}.json`)
      .pipe(catchError(this.handleError<User[]>('getAllUsers', [])));
  }

  public getUser(id: string): Observable<User> {
    return this.httpClient
      .get<User>(`${host}/${id}.json`)
      .pipe(catchError(this.handleError<User>(`getUser id=${id}`)));
  }

  public getAllSubscribes(curUserId: string): Observable<Object> {
    return this.httpClient
      .get<Object>(`${host}/${curUserId}/${pathSubsctribe}.json`)
      .pipe(catchError(this.handleError<Object>('getAllSubscribes', {})));
  }

  public addUser(user: User): Observable<User> {
    return this.httpClient
      .put<User>(`${host}/${user.uid}.json`, user)
      .pipe(catchError(this.handleError<User>('addUser')));
  }

  public addSubsctribe(curUserId: string, id: string): Observable<void> {
    return this.httpClient
      .put<void>(`${host}/${curUserId}/${pathSubsctribe}/${id}.json`, true)
      .pipe(catchError(this.handleError<void>('addSubsctribe')));
  }

  public addUserNews(curUserId: string, id: string): Observable<void> {
    return this.httpClient
      .put<void>(`${host}/${curUserId}/${pathNews}/${id}.json`, true)
      .pipe(catchError(this.handleError<void>('addUserNews')));
  }

  public addUserComment(curUserId: string, id: string): Observable<void> {
    return this.httpClient
      .put<void>(`${host}/${curUserId}/${pathComments}/${id}.json`, true)
      .pipe(catchError(this.handleError<void>('addUserComment')));
  }

  public deleteSubsctribe(curUserId: string, id: string): Observable<void> {
    return this.httpClient
      .delete<void>(`${host}/${curUserId}/${pathSubsctribe}/${id}.json`)
      .pipe(catchError(this.handleError<void>('deleteSubsctribe')));
  }

  public updateData(curUserId: string, newData: object): Observable<object> {
    return this.httpClient
      .patch<object>(`${host}/${curUserId}.json`, newData)
      .pipe(catchError(this.handleError<any>('updateDataUser')));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
