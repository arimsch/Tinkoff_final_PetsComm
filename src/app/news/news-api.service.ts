import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { News } from './models/news';
import { INewsApiService } from './interfaces/i-news-api-service';
import { UserComment } from './models/user-comment';

const host = 'https://petscomm-bb44f-default-rtdb.firebaseio.com/news';
const pathLike = '/likes';
const pathComment = '/comments';

@Injectable()
export class NewsApiService implements INewsApiService {
  constructor(private readonly httpClient: HttpClient) {}

  public getAllNews(): Observable<News[]> {
    return this.httpClient
      .get<News[]>(`${host}.json`)
      .pipe(catchError(this.handleError<News[]>('getAllNews', [])));
  }

  public getComments(newsId: string): Observable<UserComment[]> {
    return this.httpClient
      .get<UserComment[]>(`${host}/${newsId}/${pathComment}.json`)
      .pipe(catchError(this.handleError<UserComment[]>('getComments', [])));
  }

  public addNews(news: News): Observable<void> {
    return this.httpClient
      .put<void>(`${host}/${news.uid}.json`, news)
      .pipe(catchError(this.handleError<void>('addNews')));
  }

  public addLike(newsId: string, userId: string): Observable<void> {
    return this.httpClient
      .put<void>(`${host}/${newsId}/${pathLike}/${userId}.json`, true)
      .pipe(catchError(this.handleError<void>('addLike')));
  }

  public addComment(newsId: string, comment: UserComment): Observable<void> {
    return this.httpClient
      .post<void>(`${host}/${newsId}/${pathComment}.json`, comment)
      .pipe(catchError(this.handleError<void>('addComment')));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
