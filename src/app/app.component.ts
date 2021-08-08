import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Post } from './post';
import * as PostActions from './post.action'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ngRx';
  posts$:Observable<Post[]>;
  constructor(private store:Store<{posts:Post[]}>){
   this.posts$= this.store.select('posts');
  }
  ngOnInit(): void {
     this.store.dispatch(PostActions.listPosts())
  }
  addPost(){
    this.store.dispatch(PostActions.addPost({title:"madara",author:"uchiha"}))
  }
}
