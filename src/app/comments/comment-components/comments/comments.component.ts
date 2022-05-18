import { Component, OnInit } from '@angular/core';

import {IComment} from "../../../interfaces/comment.interface";
import {CommentService} from "../../comment-services/comment.service";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  comments: IComment[];

  constructor(private commentsService: CommentService) { }

  ngOnInit(): void {
    this
      .commentsService
      .getComments()
      .subscribe(value => {this.comments = value})
  }

}
