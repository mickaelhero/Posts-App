import {Component, OnInit} from '@angular/core';
import {PostService} from '../../../services/Post/post.service';
import {Post} from '../../../services/Post/post';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {

  posts?: Post[];


  constructor(private postService: PostService) {

  }

  ngOnInit(): void {
    this.setup();
  }

  private setup() {
    this.setObservers();
    this.fetchData();
  }

  private fetchData() {
    this.postService.getFeed();
  }

  private setObservers() {
    this.observePosts();
  }

  private observePosts() {
    this.postService.postsSubject.subscribe(
      value => {
        this.posts = value;
      }
    );
  }

}
