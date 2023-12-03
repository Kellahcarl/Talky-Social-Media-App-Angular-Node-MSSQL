// comment.component.ts
import { Component, Input } from '@angular/core';
import { Comments } from '../models/comment';


@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css'],
})
export class CommentComponent {
  @Input() comment!: Comments;

  likeComment(): void {
    // Implement like functionality for comments
    console.log(`Liked comment: ${this.comment.content}`);
  }

  editComment(): void {
    // Implement edit functionality for comments
    console.log(`Editing comment: ${this.comment.content}`);
  }

  deleteComment(): void {
    // Implement delete functionality for comments
    console.log(`Deleting comment: ${this.comment.content}`);
  }
}
