import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import * as PostActions from './post.action'
import { PostService } from './post.service';
@Injectable({
  providedIn: 'root'
})
export class PostEffects{
  loadPosts$ = createEffect(() => {
     return this.actions$.pipe(
      ofType(PostActions.listPosts),
      mergeMap(() => this.postService.findAll()
        .pipe(
          map(posts => PostActions.listPostSuccess({ posts: posts })),
          catchError(() => EMPTY)
        ))
    );
  });
  addPost$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(PostActions.addPost),
      mergeMap((action)=>this.postService.addPost({title:action.title,author:action.author})
      .pipe(
        tap(console.log),
        map((post)=> PostActions.addPostSuccess({post:post})),
         catchError(() => EMPTY)
           )
      )
    )
  })
  constructor(private actions$:Actions,private postService:PostService) { }
}


