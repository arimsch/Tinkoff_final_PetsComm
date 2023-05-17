import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
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
export class NewsCardComponent implements OnInit{
  @Input()
  public currentNews!: News;

  public user$: Observable<User>|undefined;

  constructor(private readonly userService: UserService){
  }

  ngOnInit():void{
    this.user$ = this.userService.getUser(this.currentNews.author);
  }

  public get likesCount(): string {
    if (this.currentNews.like) {
      return `${Object.keys(this.currentNews.like).length.toString()}`;
    } else {
      return '0';
    }
  }
}
