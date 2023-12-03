// models/comment.model.ts
export class Comments {
  postId: string;
  content: string;

  constructor(postId: string, content: string) {
    this.postId = postId;
    this.content = content;
  }
}
