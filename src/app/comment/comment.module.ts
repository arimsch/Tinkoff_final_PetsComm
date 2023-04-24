import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentComponent } from './comment.component';
import { UserLineModule } from '../user-line/user-line.module';

@NgModule({
  declarations: [CommentComponent],
  exports: [CommentComponent],
  imports: [CommonModule, UserLineModule],
})
export class CommentModule {}
