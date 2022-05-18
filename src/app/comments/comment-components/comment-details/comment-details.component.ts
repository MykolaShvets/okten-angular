import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

import {IComment} from "../../../interfaces/comment.interface";
import {CommentService} from "../../comment-services/comment.service";

@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.css']
})
export class CommentDetailsComponent implements OnInit {

  currentComment: IComment;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private commentService: CommentService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({commentId}) => {
      const state = this.router.getCurrentNavigation()?.extras?.state?.['comments'] as IComment;
      if(state){
        this.currentComment = state;
      } else {
        this.commentService.getComment(commentId).subscribe(value => {
          this.currentComment = value;
        })
      }
    })
  }

}
