import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/core/user.service';
import { UserComment } from 'src/app/news/models/user-comment';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommentComponent implements OnInit {
  @Input()
  public comment!: UserComment;
  public user$: Observable<User> | undefined;

  constructor(private readonly userService: UserService) {}

  ngOnInit(): void {
    this.user$ = this.userService.getUser(this.comment.author);
  }
}
