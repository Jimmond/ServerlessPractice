import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
   <footer class="footer">
    <div class="container content has-text-centered">
       <p>© by Jimmy Ortiz🔥</p>
    </div>
  `,
  styles: []
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
