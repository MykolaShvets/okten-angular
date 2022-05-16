import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostComponent } from './components/post/post.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { CommentsComponent } from './components/comments/comments.component';
import { CommentComponent } from './components/comment/comment.component';
import { CommentDetailsComponent } from './components/comment-details/comment-details.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    PostsComponent,
    PostComponent,
    CommentsComponent,
    CommentComponent,
    HeaderComponent,
    UserDetailsComponent,
    PostDetailsComponent,
    CommentDetailsComponent,
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule.forRoot([
          {path: '', redirectTo: 'users', pathMatch: 'full'},
          {path: 'users', component: UsersComponent, children: [
              {path: 'user/:userId', component: UserDetailsComponent}
            ]},
          {path: 'posts', component: PostsComponent, children: [
              {path: 'post/:postId', component: PostDetailsComponent}
            ]},
          {path: 'comments', component: CommentsComponent, children: [
              {path: 'comment/:commentId', component: CommentDetailsComponent}
            ] },
        ])
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
