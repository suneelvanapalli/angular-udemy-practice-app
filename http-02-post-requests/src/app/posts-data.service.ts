import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
  HttpEventType,
} from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators';
import { post as Post } from './post.model';
import { Observable, Subject, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostsDataService {
  errorOccured: Subject<string> = new Subject<string>();
  constructor(private http: HttpClient) {}

  createPost(postData: Post) {
    // Send Http request
    return this.http
      .post<{ name: string }>(
        'https://ng-udemy-practice-app.firebaseio.com/posts.json',
        postData,
        { observe: 'body' }
      )
      .subscribe(
        (responseData) => {
          console.log(responseData);
        },
        (error: HttpErrorResponse) => {
          this.errorOccured.next(error.message);
        }
      );
  }

  getPosts(): Observable<Post[]> {
    return this.http
      .get<{ [key: string]: Post }>(
        'https://ng-udemy-practice-app.firebaseio.com/posts.json',
        {
          headers: new HttpHeaders({
            'custom-header': 'Hello',
          }),
          params: new HttpParams().set('print', 'pretty'),
        }
      )
      .pipe(
        map((responseData) => {
          const postArray: Post[] = [];
          for (const key in responseData) {
            postArray.push({ ...responseData[key], id: key });
          }
          return postArray;
        }),
        catchError((error) => {
          console.log('the below log in catchError');
          console.error(error);
          return throwError(error);
        })
      );
  }

  deletePosts() {
    return this.http
      .delete('https://ng-udemy-practice-app.firebaseio.com/posts.json', {
        observe: 'events',
        responseType: 'text'
      })
      .pipe(
        tap((event) => {
          if (event.type === HttpEventType.Response) {
            console.log(event);
          }
        })
      );
  }
}
