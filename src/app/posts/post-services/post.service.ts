import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

import {IPost} from "../../interfaces/post.interface";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private _url  = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getPosts(): Observable<IPost[]>{
    return this
      .http
      .get<IPost[]>(this._url);
  }

  getPost(id: string): Observable<IPost>{
    return this
      .http
      .get<IPost>(this._url + '/' + id);
  }
}
