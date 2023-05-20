import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { News } from '../models/news';
import { UserService } from 'src/app/core/user.service';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news-subscribe',
  templateUrl: './news-subscribe.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsSubscribeComponent {
  private userId: string;

  public readonly news$ = new BehaviorSubject<Observable<News[]>>(of([]));

  constructor(
    private readonly userService: UserService,
    private readonly newsService: NewsService
  ) {
    this.userId = this.userService.userId;
  }

  ngOnInit(): void {
    this.news$.next(this.newsService.getSubscribeNews());
  }

  public addLike(id: string): void {
    this.newsService.addLikeNews(id, this.userId);
  }
}
