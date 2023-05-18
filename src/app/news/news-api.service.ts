import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { News } from './models/news';
import { INewsApiService } from './interfaces/i-news-api-service';
import { UserComment } from './models/user-comment';

const host = 'https://petscomm-bb44f-default-rtdb.firebaseio.com/news';
const pathLike = '/likes';
const pathComment = '/comments';

const params = new HttpParams({
  fromString: 'orderBy="timestamp","desc"',
});

const headers = new HttpHeaders().set('params', 'orderBy="timestamp","desc"');

@Injectable()
export class NewsApiService implements INewsApiService {
  constructor(private httpClient: HttpClient) {}

  public getAllNews(): Observable<News[]> {
    return this.httpClient.get<News[]>(`${host}.json`);
  }

  public getComments(newsId: string): Observable<UserComment[]> {
    return this.httpClient.get<UserComment[]>(
      `${host}/${newsId}/${pathComment}.json`
    );
  }

  public addNews(news: News): Observable<void> {
    return this.httpClient.put<void>(`${host}/${news.uid}.json`, news);
  }

  public addLike(newsId: string, userId: string): Observable<void> {
    return this.httpClient.put<void>(
      `${host}/${newsId}/${pathLike}/${userId}.json`,
      true
    );
  }

  public addComment(newsId: string, comment: UserComment): Observable<void> {
    return this.httpClient.post<void>(
      `${host}/${newsId}/${pathComment}.json`,
      comment
    );
  }
}
