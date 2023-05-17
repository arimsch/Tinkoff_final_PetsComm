import { Inject, Injectable } from '@angular/core';
import { NewsApiService } from './news-api.service';
import {
  INewsApiService,
  INewsApiServiceToken,
} from './interfaces/news-api-service';
import { News } from './models/news';
import { Observable, map } from 'rxjs';

@Injectable()
export class NewsService {
  constructor(
    @Inject(INewsApiServiceToken)
    private readonly newsApiService: INewsApiService
  ) {}

  public addNews(news: News): void {
    this.newsApiService.addNews(news).subscribe();
  }

  public getAllNews(): Observable<News[]> {
    return this.newsApiService
      .getAllNews()
      .pipe(
        map(el => Object.values(el))
      );
  }
}
