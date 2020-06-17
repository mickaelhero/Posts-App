import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../../../../services/Post/post';
import {PostService} from '../../../../services/Post/post.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-posts-list-item',
  templateUrl: './posts-list-item.component.html',
  styleUrls: ['./posts-list-item.component.css']
})
export class PostsListItemComponent implements OnInit {

  @Input() post: Post;
  isLoading = false;


  constructor(private postService: PostService, private router: Router) {
  }

  ngOnInit(): void {
  }

  onRemoveItem() {
    this.isLoading = true;

    this.postService.deleteByID(this.post.id).subscribe(_ => {
        this.router.navigate(['/posts']);
      },
      _ => {
        this.isLoading = false;
      });
  }

}
