import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { News } from 'src/shared/models/news';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsComponent {
  @Input()
  public news!: News;

  public get likesCount(): string {
    return `${Object.keys(this.news.like).length.toString()}`;
  }
}
