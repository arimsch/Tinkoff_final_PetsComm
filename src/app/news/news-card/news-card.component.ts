import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { News } from 'src/app/news/models/news';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsCardComponent {
  @Input()
  public currentNews!: News;

  public get likesCount(): string {
    if(this.currentNews.like){
    return `${Object.keys(this.currentNews.like).length.toString()}`;
    }
    else{
      return "0";
    }
  }
}
