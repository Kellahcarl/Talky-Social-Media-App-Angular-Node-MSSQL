// user-profile.component.ts
import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post';
import { DataService } from '../services/test.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit {
  userPosts: Post[] = [];
  selectedTab: 'posts' | 'followers' | 'following' = 'posts';

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    // Fetch user posts from the service (mock data for now)
    this.userPosts = this.dataService.getUserPosts('currentuser');
  }

  switchTab(tab: 'posts' | 'followers' | 'following'): void {
    this.selectedTab = tab;
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
