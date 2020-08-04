import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  template: `
    <section class="hero is-info is-fullheight is-bold">
    <div class="hero-body">
    <div class="container">

      <h1 class="title">Welcome to my blog app!</h1>
      <h2>Hope you enjoy 🌝</h2>

    </div>
    </div>
    </section>
  `,
  styles: []
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
