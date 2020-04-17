import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { post as Post } from "./post.model";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: "root",
})
export class PostsDataService {
  constructor(private http: HttpClient) {}

  createPost(postData: Post) {
    // Send Http request
    return this.http.post<{ name: string }>(
      "https://ng-udemy-practice-app.firebaseio.com/posts.json",
      postData
    );
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
