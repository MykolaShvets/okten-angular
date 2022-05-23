import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CommentsComponent, CommentDetailsComponent } from "./components";
import { CommentDetailsResolver, CommentsResolver } from "./services";

const routes: Routes = [
  {path: '', component: CommentsComponent, resolve: {commentsData: CommentsResolver}, children: [
      {path: ':commentId', resolve: {commentDetails: CommentDetailsResolver}, component: CommentDetailsComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommentsRoutingModule { }
