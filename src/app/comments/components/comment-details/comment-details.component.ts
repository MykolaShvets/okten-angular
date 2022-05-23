import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

import {IComment} from "../../interfaces";

@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.css']
})
export class CommentDetailsComponent implements OnInit {

  currentComment: IComment;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({commentId}) => {
      const state = this.router.getCurrentNavigation()?.extras?.state?.['comments'] as IComment;
      if(state){
        this.currentComment = state;
      } else {
        this.activatedRoute.data.subscribe(({commentDetails}) => {
          this.currentComment = commentDetails as IComment;
        })
      }
    })
  }

}
