import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {IComment} from "../interfaces/comment.interface";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private url = 'https://jsonplaceholder.typicode.com/comments';

  constructor(private http: HttpClient) {
  }

  getComments(): Observable<IComment[]> {
    return this
      .http
      .get<IComment[]>(this.url);
  }

  getComment(id: string): Observable<IComment> {
    return this
      .http
      .get<IComment>(this.url + '/' + id);
  }

}
