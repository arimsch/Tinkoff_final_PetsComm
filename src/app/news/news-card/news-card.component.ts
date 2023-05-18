import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/core/user.service';
import { News } from 'src/app/news/models/news';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsCardComponent implements OnInit {
  @Input()
  public currentNews!: News;
  @Output()
  public addLike = new EventEmitter<string>();

  private userId: string;
  public user$: Observable<User> | undefined;
  public like = false;

  constructor(private readonly userService: UserService) {
    this.userId = this.userService.userId;
  }

  ngOnInit(): void {
    if (this.currentNews.likes?.hasOwnProperty(this.userId)) {
      this.like = true;
    }
    this.user$ = this.userService.getUser(this.currentNews.author);
  }

  public get likesCount(): number {
    if (this.currentNews.likes) {
      if (this.currentNews.likes?.hasOwnProperty(this.userId)) {
        return Object.keys(this.currentNews.likes).length - 1;
      } else {
        return Object.keys(this.currentNews.likes).length;
      }
    }
    return 0;
  }

  public likeNews(): void {
    this.addLike.emit(this.currentNews.uid);
    this.like = !this.like;
  }
}
