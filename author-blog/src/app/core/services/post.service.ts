import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PostService {
  apiURL = "https://1vwbcmp1rd.execute-api.us-east-2.amazonaws.com/dev/posts";
    
  constructor(private http: HttpClient) { }


  /* Get all posts
  */
  getPosts(){
    return this.http.get(`${this.apiURL}`);
  }

  /* Get a single posts
  */
  getPost(id:string){
    return this.http.get(`${this.apiURL}/${id}`);

  }
}
