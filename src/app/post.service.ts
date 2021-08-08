import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http:HttpClient) { }
  private readonly API = 'http://localhost:3000';
  findAll(){
    return this.http.get<Post[]>(`${this.API}/posts`);
  }
  addPost(post:Post):Observable<Post>{
    return this.http.post<Post>(`${this.API}/posts/`,post)
  }
}
