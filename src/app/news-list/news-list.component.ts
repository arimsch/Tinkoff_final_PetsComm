import { Component, OnInit } from '@angular/core';
import { News } from 'src/shared/models/news';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.less'],
})
export class NewsListComponent implements OnInit {
  public news: News[] = [
    {
      id: '1',
      author: 'Uly',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin iaculis ipsum in elit mattis consectetur. Maecenas venenatis ligula libero, lobortis rhoncus eros aliquam a. Vivamus blandit scelerisque urna, eu euismod ipsum ultricies non. Aenean fringilla tincidunt luctus. Phasellus eleifend a enim vel aliquet. Donec accumsan orci ac nunc suscipit posuere in a turpis. Fusce hendrerit in lectus eu egestas. Donec nisl ipsum, faucibus sit amet elit eu, vehicula hendrerit purus. Duis tempus pulvinar pharetra. In volutpat, odio dictum ornare iaculis, arcu turpis blandit quam, sit amet malesuada nisl enim nec tortor. In eleifend arcu diam, ut dignissim risus elementum nec. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque pellentesque elit ac feugiat posuere. Aliquam diam ante, condimentum eget nisi nec, suscipit efficitur velit. Cras sed dolor eu tortor dapibus condimentum.',
      img: 'https://koshka.top/uploads/posts/2021-11/1637808119_7-koshka-top-p-kota-na-avu-11.jpg',
      like: {
        arina: true,
      },
      timestamp: 19999999000,
    },
  ];

  ngOnInit(): void {
    throw new Error('I will get news from news.service.ts');
  }
}
