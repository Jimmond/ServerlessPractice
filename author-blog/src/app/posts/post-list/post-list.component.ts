import { Component, OnInit } from '@angular/core';
import { PostService } from '../../core/services/post.service';

@Component({
  selector: 'app-post-list',
  template: `

  <section class="section">
    <div class="container">
    <div class="columns is-multiline" *ngIf="posts">
      <div class="column is-4" *ngFor="let post of posts | async">
      <div class="card">
      <div class="card-content">
      <a routerLink ="/posts/{{post.id}}">
      {{post.title}}
      </a>

      </div>
      </div>
      </div>
    </div>
    </div>
    </section>
    
  `,
  styles: []
})
export class PostListComponent implements OnInit {
  posts;
  constructor(private postService: PostService) { }

  ngOnInit() {
    this.posts = this.postService.getPosts();
  }

}
