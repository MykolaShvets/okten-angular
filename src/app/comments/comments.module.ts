import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";

import { CommentsRoutingModule } from './comments-routing.module';
import { CommentDetailsComponent, CommentsComponent, CommentComponent } from './comment-components';
import {CommentService} from "./comment-services/comment.service";


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
    CommentService
  ]
})
export class CommentsModule { }
