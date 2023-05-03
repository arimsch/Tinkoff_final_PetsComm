import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  TuiAccordionModule,
  TuiElasticContainerModule,
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

@NgModule({
  declarations: [
    NewsComponent,
    NewsCardComponent,
    AddCommentComponent,
    CommentComponent,
    CommentListComponent,
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
  ],
})
export class NewsModule {}
