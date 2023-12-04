// homepage.component.ts
import { Component, OnInit } from '@angular/core';

import { DataService } from '../services/test.service';
import { Post } from '../models/post';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  posts: Post[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    // Fetch posts from the service (mock data for now)
    this.posts = this.dataService.getPosts();
  }

  likePost(post: Post): void {
    // Implement like functionality
    console.log(`Liked post: ${post.content}`);
  }

  commentOnPost(post: Post): void {
    // Implement comment functionality
    console.log(`Commented on post: ${post.content}`);
  }
}
