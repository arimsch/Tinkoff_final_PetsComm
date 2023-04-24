import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCommentComponent } from './add-comment.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TuiTextAreaModule } from '@taiga-ui/kit';
import { TuiButtonModule } from '@taiga-ui/core';

@NgModule({
  declarations: [AddCommentComponent],
  exports: [AddCommentComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TuiTextAreaModule,
    TuiButtonModule,
  ],
})
export class AddCommentModule {}
