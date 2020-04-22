import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MoviePostService } from '../../services/movie-post.service';
import { Movie } from '../../models/movie';

//see on võetud https://dev.to/dileno/build-a-simple-crud-app-with-angular-8-and-asp-net-core-2-2-part-1-back-end-39e1

@Component({
  selector: 'app-movie-posts',
  templateUrl: './movie-posts.component.html',
  styleUrls: ['./movie-posts.component.css']
})
export class MoviePostsComponent implements OnInit {

  moviePosts$: Observable<Movie[]>;

  constructor
    (
    private _moviePostService: MoviePostService,
    ) { }

  ngOnInit() {
    this.loadMoviePosts();
  }

  loadMoviePosts() {
    this.moviePosts$ = this._moviePostService.getMoviePosts();
  }

  delete(id) {
    const ans = confirm('Do you want to delete the movie with id: ' + id);
    if (ans) {
      this._moviePostService.deleteMoviePost(id).subscribe((data) => {
        this.loadMoviePosts();
      });
    }
  }
}
