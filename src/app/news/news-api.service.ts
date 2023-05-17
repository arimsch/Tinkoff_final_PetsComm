import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { News } from './models/news';
import { INewsApiService } from './interfaces/news-api-service';

const host = 'https://petscomm-bb44f-default-rtdb.firebaseio.com/news';
const pathSubsctribe = '/comments';

@Injectable()
export class NewsApiService implements INewsApiService{
  constructor(private httpClient: HttpClient) {}

//   public getAllUsers(): Observable<News[]> {
//     return this.httpClient.get<News[]>(`${host}.json`);
//   }

//   public getAllSubscribes(curUserId: string): Observable<Object> {
//     return this.httpClient.get<Object>(
//       `${host}/${curUserId}/${pathSubsctribe}.json`
//     );
//   }

  public addNews(news: News): Observable<void> {
    return this.httpClient.post<void>(`${host}.json`, news);
  }
}