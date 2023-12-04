// post-creation.component.ts
import { Component } from '@angular/core';
import { Post } from '../models/post';

@Component({
  selector: 'app-post-creation',
  templateUrl: './post-creation.component.html',
  styleUrls: ['./post-creation.component.css'],
})
export class PostCreationComponent {
  newPost: Post = {
    postId :'2',
    userId: "0",
    content: '',
    image: null,
  };

  createPost(): void {
    // Implement post creation functionality (you can send this data to the backend)
    console.log('New Post:', this.newPost);
    // Clear the form after creating a post
    this.newPost = { postId : '0', userId: '0', content: '', image: null };
  }
}
