import {Component, Input, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {PostService} from '../../../services/Post/post.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Post} from '../../../services/Post/post';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  post?: Post;
  isComponentReady = false;
  errorMsg?: string;
  successMsg?: string;
  isComponentLoading = false;

  get isAlertDisplayed(): boolean {
    return this.errorMsg != null || this.successMsg != null;
  }

  get alertType(): string {
    return this.errorMsg ? 'danger' : 'success';
  }


  constructor(private postService: PostService, private router: Router, private route: ActivatedRoute) {
  }


  ngOnInit(): void {
    this.getPostToEditIfNecessary();
  }

  getPostToEditIfNecessary() {
    const id = this.route.snapshot.params.id;

    if (id != null) {
      this.postService.getByID(id).subscribe(value => {
        this.setComponentReadyToUse();
        this.post = value;
      });
    } else {
      this.setComponentReadyToUse();
    }
  }

  setComponentReadyToUse() {
    this.isComponentReady = true;
  }

  onSubmit(form: NgForm) {
    this.isComponentLoading = true;

    if (this.isEditMode()) {
      this.updatePost(form);
    } else {
      this.createPost(form);
    }
  }

  createPost(form: NgForm) {
    this.sendRequest(this.postService.createWith(form.value.title, form.value.content));
  }

  updatePost(form: NgForm) {
    this.sendRequest(this.postService.edit(this.post, form.value.title, form.value.content));
  }

  sendRequest(request: Observable<Post>) {
    request.subscribe(_ => {
        this.runSuccessRequest();
      },
      error => {
        this.runErrorRequest(error);
      });
  }

  runSuccessRequest() {
    this.isComponentLoading = false;
    this.successMsg = 'Done. you will be redirected to the feed on few seconds...';
    this.navigateToFeed();
  }

  runErrorRequest(error) {
    this.isComponentLoading = false;
    this.errorMsg = error.message;
  }

  navigateToFeed() {
    setTimeout(() => {
      this.router.navigate(['/posts']);
    }, 3000);
  }

  isEditMode(): boolean {
    return this.post != null;
  }

}
