import { Observable } from 'rxjs';
import { InjectionToken } from '@angular/core';
import { News } from '../models/news';
import { UserComment } from '../models/user-comment';

export const INewsApiServiceToken = new InjectionToken('INewsApiService');

export interface INewsApiService {
  getAllNews(): Observable<News[]>;
  getComments(newsId: string): Observable<UserComment[]>;
  addNews(news: News): Observable<void>;
  addLike(newsId: string, userId: string): Observable<void>;
  addComment(newsId: string, comment: UserComment): Observable<void>;
}
