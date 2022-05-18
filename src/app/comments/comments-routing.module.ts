import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {CommentsComponent, CommentDetailsComponent} from "./comment-components";

const routes: Routes = [
  {path: '', component: CommentsComponent, children: [
      {path: ':commentId', component: CommentDetailsComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommentsRoutingModule { }
