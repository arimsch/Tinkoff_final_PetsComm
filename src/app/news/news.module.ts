import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news.component';
import { TuiAccordionModule, TuiElasticContainerModule } from '@taiga-ui/kit';
import { UserLineModule } from '../user-line/user-line.module';
import { TuiSvgModule } from '@taiga-ui/core';
import { CommentListModule } from '../comment-list/comment-list.module';

@NgModule({
  declarations: [NewsComponent],
  exports: [NewsComponent],
  imports: [
    CommonModule,
    TuiElasticContainerModule,
    UserLineModule,
    TuiSvgModule,
    TuiAccordionModule,
    CommentListModule,
  ],
})
export class NewsModule {}
