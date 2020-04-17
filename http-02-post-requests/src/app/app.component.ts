import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { post as Post } from "./post.model";
import { PostsDataService } from "./posts-data.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  loadedPosts: Post[] = [];
  isFetching: boolean;
  constructor(private dataService: PostsDataService) {}

  ngOnInit() {
    this.onFetchPosts();
  }

  onCreatePost(postData: Post) {
    // Send Http request
    this.dataService.createPost(postData).subscribe((responseData) => {
      console.log(responseData);
    });
  }

  onFetchPosts() {
    this.isFetching = true;
    this.dataService
    .getPosts()
    .subscribe((posts) => {
      this.loadedPosts = posts;
      console.log(posts);
      this.isFetching = false;
    });
  }

  onClearPosts() {
    this.dataService.deletePosts().subscribe((responseData) => {
        console.log(responseData);
        alert('posts deleted');
    })
  }
}
