import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PostDetailComponent, PostsComponent } from './components';
import { PostDetailsResolver, PostsResolver } from './services';

const routes: Routes = [
  {path: '', component: PostsComponent, resolve: {postsData: PostsResolver}, children: [
      {path: ':postId', resolve: {postDetails: PostDetailsResolver}, component: PostDetailComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
