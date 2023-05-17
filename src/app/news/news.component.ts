import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { News } from 'src/app/news/models/news';
import { UserService } from '../core/user.service';
import { NewsService } from './news.service';
import { NewsForm } from './models/news-form';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsComponent implements OnInit {
  public toggleNews = false;

  public news$: Observable<News[]> | undefined;
  
  constructor(
    private readonly userService: UserService,
    private readonly newsService: NewsService
  ) {}

  ngOnInit(): void {
    this.news$ = this.newsService.getAllNews();
  }

  public toggleAddNews(): void {
    this.toggleNews = !this.toggleNews;
  }

  public addNews(news: NewsForm) {
    this.newsService.addNews({
      author: this.userService.userId,
      ...news,
      timestamp: Date.now(),
    });
    this.toggleNews = false;
  }

}
