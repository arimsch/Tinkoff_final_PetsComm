import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { UserComment } from 'src/app/news/models/user-comment';
import { NewsService } from '../news.service';
import { UserService } from 'src/app/core/user.service';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommentListComponent implements OnInit {
  @Input()
  public newsId!: string;
  private userId: string;

  public readonly comments$ = new BehaviorSubject<Observable<UserComment[]>>(
    of([])
  );

  constructor(
    private readonly newsService: NewsService,
    private readonly userService: UserService
  ) {
    this.userId = this.userService.userId;
  }

  ngOnInit(): void {
    this.comments$.next(this.newsService.getAllCommentsNews(this.newsId));
  }

  public addComment(commentContent: string): void {
    this.newsService.addCommentNews(this.newsId, {
      author: this.userId,
      content: commentContent,
      timestamp: Date.now(),
    });
    setTimeout(() => {
      this.comments$.next(this.newsService.getAllCommentsNews(this.newsId));
    }, 2000);
  }
}
