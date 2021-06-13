import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

interface Post {
  userId?: number;
  id: number;
  title: string;
  body?: string;
}

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent {
  posts: Post[] = [];
  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {
    this.http.get(this.url).subscribe((response) => {
      this.posts = response as Post[];
    });
  }

  createPost(inputAdd: HTMLInputElement) {
    const post = { title: inputAdd.value };
    inputAdd.value = '';
    this.http.post(this.url, post).subscribe((res) => {
      this.posts.unshift(res as Post);
    });
  }
}
