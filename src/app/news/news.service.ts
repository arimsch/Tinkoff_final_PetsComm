import { Inject, Injectable } from '@angular/core';
import {
  INewsApiService,
  INewsApiServiceToken,
} from './interfaces/i-news-api-service';
import { News } from './models/news';
import { Observable, map } from 'rxjs';
import { UserComment } from './models/user-comment';

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
    return this.newsApiService.getAllNews().pipe(map(el => Object.values(el)));
  }

  public getAllCommentsNews(newsId: string): Observable<UserComment[]> {
    return this.newsApiService
      .getComments(newsId)
      .pipe(map(el => Object.values(el)));
  }

  public addLikeNews(newsId: string, userId: string): void {
    this.newsApiService.addLike(newsId, userId).subscribe();
  }

  public addCommentNews(newsId: string, comment: UserComment): void {
    this.newsApiService.addComment(newsId, comment).subscribe();
  }
}
