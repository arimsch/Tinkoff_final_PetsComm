import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { News } from 'src/app/news/models/news';
import { UserService } from '../core/user.service';
import { NewsService } from './news.service';
import { NewsForm } from './models/news-form';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsComponent implements OnInit {
  public toggleNews = false;

  public news: News[] = [
    {
      author: 'Uly',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin iaculis ipsum in elit mattis consectetur. Maecenas venenatis ligula libero, lobortis rhoncus eros aliquam a. Vivamus blandit scelerisque urna, eu euismod ipsum ultricies non. Aenean fringilla tincidunt luctus. Phasellus eleifend a enim vel aliquet. Donec accumsan orci ac nunc suscipit posuere in a turpis. Fusce hendrerit in lectus eu egestas. Donec nisl ipsum, faucibus sit amet elit eu, vehicula hendrerit purus. Duis tempus pulvinar pharetra. In volutpat, odio dictum ornare iaculis, arcu turpis blandit quam, sit amet malesuada nisl enim nec tortor. In eleifend arcu diam, ut dignissim risus elementum nec. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque pellentesque elit ac feugiat posuere. Aliquam diam ante, condimentum eget nisi nec, suscipit efficitur velit. Cras sed dolor eu tortor dapibus condimentum.',
      urlNewsPhoto:
        'https://koshka.top/uploads/posts/2021-11/1637808119_7-koshka-top-p-kota-na-avu-11.jpg',
      like: {
        arina: true,
      },
      timestamp: 19999999000,
    },
  ];

  constructor(private readonly userService: UserService,
    private readonly newsService:NewsService){}

  ngOnInit(): void {
    // throw new Error('I will get news from news.service.ts');
  }

  public toggleAddNews(): void {
    this.toggleNews = !this.toggleNews;
  }

  public addNews(news: NewsForm){
    this.newsService.addNews({
      author: this.userService.userId,
      ...news,
      timestamp: Date.now()
    });
    this.toggleNews = false;
  }
}
