import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentListComponent } from './comment-list.component';
import { CommentModule } from '../comment/comment.module';
import { AddCommentModule } from '../add-comment/add-comment.module';

@NgModule({
  declarations: [CommentListComponent],
  exports: [CommentListComponent],
  imports: [CommonModule, CommentModule, AddCommentModule],
})
export class CommentListModule {}
