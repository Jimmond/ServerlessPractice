import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  template: `
    <!--- Header --->
    <app-header></app-header>

    <!--- Routes get injected here --->
    <router-outlet></router-outlet>
    <!--- Footer --->
    <app-footer></app-footer>
  `,
  styles: []
})
export class AppComponent {
  constructor(private http: HttpClient){}

  ngOnInit(){
    this.http.get('https://1vwbcmp1rd.execute-api.us-east-2.amazonaws.com/dev/posts').subscribe(data =>{
      console.log(data);
    })
  }
}
