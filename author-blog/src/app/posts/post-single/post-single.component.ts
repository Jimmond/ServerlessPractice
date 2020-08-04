import { Component, OnInit } from '@angular/core';
import { PostService } from '../../core/services/post.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-single',
  template: `
    <section class="section">
    <div class="container">
      <div class="card" *ngIf="post">
      <h2> {{post.title}} <h2>
      <p> {{post.body}} </p>

  `,
  styles: []
})
export class PostSingleComponent implements OnInit {
  post;
  constructor(
    private postsService: PostService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.route.params.subscribe(params =>{
      const id = params['id'];
      this.postsService
      .getPost(id)
      .subscribe(post => this.post = post)
    })
  }

}
