// models/post.ts
export class Post {
  postId: string;
  userId: string;
  content: string;
  image: string | null;

  constructor(
    postId: string,
    userId: string,
    content: string,
    image: string | null
  ) {
    this.postId = postId;
    this.userId = userId;
    this.content = content;
    this.image = image;
  }
}
