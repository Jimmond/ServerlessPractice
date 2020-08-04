import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <nav class="navbar is-dark">
      <div class="navbar-brand">
        <a class="navbar-item" routerLink="">
        Blog App 📎 
        </a>
        <a class="navbar-item" routerLink="posts">
        Read Post 📓
        </a>
        <a class="navbar-item" routerLink="dopost">
        Write Post ✍
        </a>
        
      </div>
    </nav>
  `,
  styles: []
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
