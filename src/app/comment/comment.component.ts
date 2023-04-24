import { Component, Input } from '@angular/core';
import { Comment } from 'src/shared/models/comment';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.less'],
})
export class CommentComponent {
  @Input()
  public comment!: Comment;
}
