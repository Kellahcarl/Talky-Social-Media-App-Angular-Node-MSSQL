// data.service.ts
import { Injectable } from '@angular/core';
import { Post } from '../models/post';
import { Comments } from '../models/comment';


@Injectable({
  providedIn: 'root',
})
export class DataService {
  getPosts(): Post[] {
    return [
      {postId : '2', userId: 'user1', content: 'Post 1', image: null },
      {postId : '2', userId: 'user2', content: 'Post 2', image: null },
      // Add more posts as needed
    ];
  }
  getUserPosts(userId?: string): Post[] {
    // Mock data for all posts or specific user posts based on userId
    // You can replace this logic with actual data retrieval from your backend
    const allPosts: Post[] = [
      { postId : '2' , userId: 'user1', content: 'Post 1', image: null },
      { postId : '2' ,userId: 'user2', content: 'Post 2', image: null },
      // Add more posts as needed
    ];

    if (userId) {
      // Filter posts based on the userId
      return allPosts.filter((post) => post.userId === userId);
    }

    return allPosts;
  }
  getPostById(postId: string): Post | undefined {
    // Fetch the post with the given postId
    // Replace this logic with actual data retrieval from your backend
    const allPosts: Post[] = [
      {postId : '2', userId: 'user1', content: 'Post 1', image: null },
      { postId : '2' ,userId: 'user2', content: 'Post 2', image: 'path_to_image' },
      // Add more posts as needed
    ];

    return allPosts.find((post) => post.postId === postId);
  }

  getCommentsForPost(postId: string): Comments[] {
    // Fetch comments for the post with the given postId
    // Replace this logic with actual data retrieval from your backend
    const allComments: Comments[] = [
      {postId: 'post1', content: 'Comment 1' },
      { postId: 'post1', content: 'Comment 2' },
      // Add more comments as needed
    ];

    return allComments.filter((comment) => comment.postId === postId);
  }
}
