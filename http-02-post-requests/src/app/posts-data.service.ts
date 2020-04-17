import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { map } from "rxjs/operators";
import { post as Post } from "./post.model";
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: "root",
})
export class PostsDataService {
  errorOccured: Subject<string> = new Subject<string>();
  constructor(private http: HttpClient) {}

  createPost(postData: Post) {
    // Send Http request
    return this.http.post<{ name: string }>(
      "https://ng-udemy-practice-app.firebaseio.com/posts.json",
      postData
    ).subscribe((responseData) => {
      console.log(responseData);
    }, (error: HttpErrorResponse) => {
        this.errorOccured.next(error.message);
    });
  }

  getPosts(): Observable<Post[]> {
    return this.http
      .get<{ [key: string]: Post }>(
        "https://ng-udemy-practice-app.firebaseio.com/posts.json"
      )
      .pipe(
        map((responseData) => {
          const postArray: Post[] = [];
          for (const key in responseData) {
            postArray.push({ ...responseData[key], id: key });
          }
          return postArray;
        })
      );
  }

  deletePosts() {
   return  this.http.delete("https://ng-udemy-practice-app.firebaseio.com/posts.json");
  }
}
