import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

import {IPost} from "../../interfaces";

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  currentPost: IPost;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({postId}) => {
      const state = this.router.getCurrentNavigation()?.extras?.state?.['post'] as IPost;
      if(state){
        this.currentPost = state;
      }else {
        this.activatedRoute.data.subscribe(({postDetails}) => this.currentPost = postDetails)
      }
    })
  }

}
