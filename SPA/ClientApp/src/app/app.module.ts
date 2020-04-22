import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { MoviePostComponent } from './movie-post/movie-post.component';
//import { MoviePostAddEditComponent } from './movie-post-add-edit/movie-post-add-edit.component';
import { MoviePostsComponent } from './movie-posts/movie-posts.component';
import { MoviePostService } from '../services/movie-post.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { MovieFilterPipe } from '../movie-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    MoviePostComponent,
    //MoviePostAddEditComponent,
    MoviePostsComponent,
    MovieFilterPipe
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    Ng2SearchPipeModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: MoviePostsComponent, pathMatch: 'full' },
      { path: 'movie/:id', component: MoviePostComponent },
      //{ path: 'add', component: MoviePostAddEditComponent },
      //{ path: 'movie/edit/:id', component: MoviePostAddEditComponent },
      { path: '**', redirectTo: '/' }
    ])
  ],
  providers: [
    MoviePostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
