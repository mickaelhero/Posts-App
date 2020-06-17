import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Post} from './post';
import {Observable, Subject, Subscription} from 'rxjs';
import {RestService} from '../Networking/rest.service';

@Injectable({providedIn: 'root'})
export class PostService extends RestService<Post> {

  private posts?: Post[];
  postsSubject = new Subject<Post[]>();

  constructor(protected httpClient: HttpClient) {
    super(httpClient, 'posts');
  }

  getFeed() {
    this.getAll().subscribe(
      res => {
        this.posts = res;
        this.emitData();
      },
      error => {
        console.log('Error: ' + error);
      }
    );
  }

  createWith(title: string, content: string) {
    const post = new Post(title, content, 12);
    return this.create(post);
  }

  edit(currentPost: Post, title: string, content: string) {
    const post = currentPost;
    post.title = title;
    post.body = content;

    return this.updateByID(post.id, post);
  }

  emitData() {
    this.postsSubject.next(this.posts.slice());
  }

}
