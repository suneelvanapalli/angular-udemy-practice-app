import { Component, OnInit, OnDestroy } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { map } from "rxjs/operators";
import { post as Post } from "./post.model";
import { PostsDataService } from "./posts-data.service";
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit, OnDestroy {
  loadedPosts: Post[] = [];
  isFetching: boolean;
  error: string;
  errorSubscribe: Subscription;
  constructor(private dataService: PostsDataService) {}

  ngOnInit() {
    this.onFetchPosts();
    this.errorSubscribe = this.dataService.errorOccured.subscribe((error) => {
      this.isFetching = false;
      this.error = error;
    });
  }

  ngOnDestroy() {
    this.errorSubscribe.unsubscribe();
  }

  onCreatePost(postData: Post) {
    // Send Http request
    // this.dataService.createPost(postData).subscribe(
    //   (responseData) => {
    //     console.log(responseData);
    //     alert("new post created");
    //     this.onFetchPosts();
    //   },
    //   (error: HttpErrorResponse) => {
    //     this.error = error.message;
    //   }
    // );

    this.dataService.createPost(postData);
  }

  onFetchPosts() {
    this.isFetching = true;
    this.error = null;
    this.dataService.getPosts().subscribe(
      (posts) => {
        this.loadedPosts = posts;
        console.log(posts);
        this.isFetching = false;
      },
      (error: HttpErrorResponse) => {
        this.error = error.message;
      }
    );
  }

  onClearPosts() {
    this.dataService.deletePosts().subscribe(
      (responseData) => {
        console.log(responseData);
        this.loadedPosts = [];
        alert("posts deleted");
      },
      (error: HttpErrorResponse) => {
        this.error = error.message;
      }
    );
  }
}
