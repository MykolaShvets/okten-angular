import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {PostDetailComponent, PostsComponent} from "./post-components";

const routes: Routes = [
  {path: '', component: PostsComponent, children: [
      {path: ':postId', component: PostDetailComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
