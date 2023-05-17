import { Component, Input, OnInit } from '@angular/core';
import { Comment } from 'src/app/news/models/comment';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
})
export class CommentListComponent implements OnInit {
  @Input()
  public newsId!: string;

  public comments: Comment[] = [
    // {
    //   author: 'Arina',
    //   content: 'I agree',
    //   timestamp: 1575909015000,
    // },
  ];

  ngOnInit(): void {
    throw new Error('I will get comments from comments.service using newsId');
  }
}
