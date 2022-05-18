import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";

import { PostsRoutingModule } from './posts-routing.module';
import { PostDetailComponent,PostComponent, PostsComponent } from './post-components';
import {PostService} from "./post-services/post.service";


@NgModule({
  declarations: [
    PostsComponent,
    PostComponent,
    PostDetailComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    HttpClientModule
  ],
  providers: [PostService]
})
export class PostsModule { }
