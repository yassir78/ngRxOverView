import { state } from "@angular/animations";
import { act } from "@ngrx/effects";
import { createReducer, on } from "@ngrx/store";
import { Action } from "rxjs/internal/scheduler/Action";
import { Post } from "./post";
import * as PostActions from './post.action'
export interface State {
  posts: Post[];
}
export const initialState:State={posts:[]}

export const postReducer = createReducer(
    initialState,
    on(PostActions.listPostSuccess,(state,action)=>{return {
        ...state,
        posts:action.posts
    }}),
     on(PostActions.addPostSuccess,(state,action)=>{return {
        ...state,
        posts:[...state.posts,action.post]
    }}),
)