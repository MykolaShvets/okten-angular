import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";

import { PostsRoutingModule } from './posts-routing.module';
import { PostDetailComponent,PostComponent, PostsComponent } from './components';
import {PostDetailsResolver, PostService, PostsResolver} from "./services";


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
  providers: [
    PostService,
    PostsResolver,
    PostDetailsResolver
  ]
})
export class PostsModule { }
