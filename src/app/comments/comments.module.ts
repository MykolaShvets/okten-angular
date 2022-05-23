import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";

import { CommentsRoutingModule } from './comments-routing.module';
import { CommentDetailsComponent, CommentsComponent, CommentComponent } from './components';
import { CommentDetailsResolver, CommentService, CommentsResolver } from "./services";


@NgModule({
  declarations: [
    CommentsComponent,
    CommentComponent,
    CommentDetailsComponent
  ],
  imports: [
    CommonModule,
    CommentsRoutingModule,
    HttpClientModule
  ],
  providers: [
    CommentService,
    CommentsResolver,
    CommentDetailsResolver
  ]
})
export class CommentsModule { }
