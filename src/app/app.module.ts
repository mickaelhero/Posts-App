import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {PostsListComponent} from './features/post/posts-list/posts-list.component';
import {PostService} from './services/Post/post.service';
import {PostsListItemComponent} from './features/post/posts-list/posts-list-item/posts-list-item.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {PostViewerComponent} from './features/post/post-viewer/post-viewer.component';
import {Router, RouterModule, Routes} from '@angular/router';
import {SpinnerComponent} from './views/spinner/spinner.component';
import {CreatePostComponent} from './features/post/create-post/create-post.component';
import {NavBarComponent} from './views/nav-bar/nav-bar.component';
import {RestService} from './services/Networking/rest.service';
import {FourOhFourComponent} from './features/404/four-oh-four/four-oh-four.component';

const appRoutes: Routes = [
  {path: '', component: PostsListComponent},
  {path: 'posts', component: PostsListComponent},
  {path: 'posts/:id', component: PostViewerComponent},
  {path: 'create', component: CreatePostComponent},
  {path: 'edit/:id', component: CreatePostComponent},
  {path: 'not-found', component: FourOhFourComponent},
  {path: '**', redirectTo: 'not-found'}
];

@NgModule({
  declarations: [
    AppComponent,
    PostsListComponent,
    PostsListItemComponent,
    PostViewerComponent,
    SpinnerComponent,
    CreatePostComponent,
    NavBarComponent,
    FourOhFourComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    NgbModule
  ],
  providers: [PostService, RestService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
