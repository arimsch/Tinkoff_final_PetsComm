import { Observable } from 'rxjs';
import { InjectionToken } from '@angular/core';
import { News } from '../models/news';

export const INewsApiServiceToken = new InjectionToken('INewsApiService');

export interface INewsApiService {
  addNews(news: News): Observable<void>;
  getAllNews(): Observable<News[]>;
}
