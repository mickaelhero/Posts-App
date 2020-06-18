import {Component, OnInit} from '@angular/core';
import {PostService} from '../../../services/Post/post.service';
import {ActivatedRoute} from '@angular/router';
import {Post} from '../../../services/Post/post';

@Component({
  selector: 'app-post-viewer',
  templateUrl: './post-viewer.component.html',
  styleUrls: ['./post-viewer.component.css']
})
export class PostViewerComponent implements OnInit {

  post?: Post;

  get isSpinnerDisplayed(): boolean {
    return this.post == null;
  }


  constructor(private postService: PostService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.postService.getByID(+this.route.snapshot.params.id).subscribe(value => {
      this.post = value;
    });
  }

}
