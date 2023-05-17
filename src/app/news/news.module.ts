import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  TuiAccordionModule,
  TuiElasticContainerModule,
  TuiInputFilesModule,
  TuiTextAreaModule,
} from '@taiga-ui/kit';
import { TuiButtonModule, TuiSvgModule } from '@taiga-ui/core';
import { NewsComponent } from './news.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddCommentComponent } from './add-comment/add-comment.component';
import { SharedModule } from '../shared/shared.module';
import { CommentComponent } from './comment/comment.component';
import { CommentListComponent } from './comment-list/comment-list.component';
import { NewsCardComponent } from './news-card/news-card.component';
import { AddNewsComponent } from './add-news/add-news.component';
import { NewsService } from './news.service';
import { NewsApiService } from './news-api.service';
import { INewsApiServiceToken } from './interfaces/news-api-service';

@NgModule({
  declarations: [
    NewsComponent,
    NewsCardComponent,
    AddCommentComponent,
    CommentComponent,
    CommentListComponent,
    AddNewsComponent,
  ],
  exports: [NewsComponent],
  imports: [
    CommonModule,
    TuiElasticContainerModule,
    TuiSvgModule,
    TuiAccordionModule,
    FormsModule,
    ReactiveFormsModule,
    TuiTextAreaModule,
    TuiButtonModule,
    SharedModule,
    TuiInputFilesModule,
  ],
  providers: [
    { provide: INewsApiServiceToken, useClass: NewsApiService },
    NewsService,
  ],
})
export class NewsModule {}
