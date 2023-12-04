// post-detail.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../models/post';

import { DataService } from '../services/test.service';
import { Comments } from '../models/comment';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css'],
})
export class PostDetailComponent implements OnInit {
  postId!: string | null | undefined; // Added to capture postId from the route
  post!: Post | null | undefined;
  postComments: Comments[] | null | undefined = [];
  newComment: string = '';

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    // Fetch post details and comments based on postId from the route
    this.route.paramMap.subscribe((params) => {
      this.postId = params.get('id');
      if (this.postId) {
        this.post = this.dataService.getPostById(this.postId);
        this.postComments = this.dataService.getCommentsForPost(this.postId);
      } else {
        // Handle the case where postId is null (if needed)
        console.error('Post ID is null.');
      }
    });
  }

  likeComment(comment: Comments): void {
    // Implement like functionality for comments
    console.log(`Liked comment: ${comment.content}`);
  }

  editComment(comment: Comments): void {
    // Implement edit functionality for comments
    console.log(`Editing comment: ${comment.content}`);
  }

  deleteComment(comment: Comments): void {
    // Implement delete functionality for comments
    console.log(`Deleting comment: ${comment.content}`);
  }

  addComment(): void {
    // Implement add comment functionality
    console.log(`Adding comment: ${this.newComment}`);
    // Clear the comment form after adding a comment
    this.newComment = '';
  }
}
