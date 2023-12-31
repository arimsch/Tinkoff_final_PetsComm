import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { News } from 'src/app/news/models/news';
import { UserService } from '../core/user.service';
import { NewsService } from './news.service';
import { NewsForm } from './models/news-form';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsComponent implements OnInit {
  public toggleNews = false;

  public readonly news$ = new BehaviorSubject<Observable<News[]>>(of([]));

  private userId: string;

  constructor(
    private readonly userService: UserService,
    private readonly newsService: NewsService
  ) {
    this.userId = this.userService.userId;
  }

  ngOnInit(): void {
    this.news$.next(this.newsService.getAllNews());
  }

  public toggleAddNews(): void {
    this.toggleNews = !this.toggleNews;
  }

  public addNews(news: NewsForm): void {
    let time = Date.now();
    this.newsService.addNews({
      uid: `${this.userService.userId + time}`,
      author: this.userId,
      ...news,
      timestamp: time,
    });
    this.toggleNews = false;
    setTimeout(() => {
      this.news$.next(this.newsService.getAllNews());
    }, 2000);
  }

  public addLike(id: string): void {
    this.newsService.addLikeNews(id, this.userId);
  }
}
