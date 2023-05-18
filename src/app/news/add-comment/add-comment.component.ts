import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddCommentComponent implements OnInit {
  @Output()
  public addComment = new EventEmitter<string>();

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
    if (this.formComment.valid) {
      this.addComment.emit(formComment.value.content);
      this.formComment.reset();
    }
  }
}
