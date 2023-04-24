import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsListComponent } from './news-list.component';
import { AboutRoutingModule } from './news-list-routing.module';
import { NewsModule } from '../news/news.module';

@NgModule({
  declarations: [NewsListComponent],
  exports: [NewsListComponent],
  imports: [CommonModule, AboutRoutingModule, NewsModule],
})
export class NewsListModule {}
