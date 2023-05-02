import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Comment } from 'src/shared/models/comment';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddCommentComponent {
  @Output()
  public addComment = new EventEmitter<Comment>();

  public formComment!: FormGroup;

  constructor(private readonly fb: FormBuilder) {}

  private buildCommentForm(): void {
    this.formComment = this.fb.group({
      content: [null, [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.buildCommentForm();
  }

  public sendComment(formComment: FormGroup<any>): void {
    this.addComment.emit({
      author: 'I will get it from authorizedUser.service',
      content: formComment.value,
      timestamp: new Date().getMilliseconds(),
    }),
      this.formComment.reset();
  }
}
