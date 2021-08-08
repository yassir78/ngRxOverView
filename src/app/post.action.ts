import { createAction, props } from "@ngrx/store";
import { Post } from "./post";
export const listPosts = createAction(
    '[Post Component] List Posts',
)
export const addPost = createAction(
    '[Post Component] Add Post',
    props<{title:string,author:string}>()
);
export const addPostSuccess = createAction(
    '[Post Effect] Add Post Success',
    props<{post:Post}>()
);
export const deletePost = createAction(
    '[Post Component] Delete Post',
    props<{id:number}>()
);  
export const listPostSuccess = createAction(
    '[Post Effect] List Post Success',
    props<{posts:Post[]}>()
);
