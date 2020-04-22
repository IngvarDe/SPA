import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MoviePostService } from '../../services/movie-post.service';
import { Movie } from '../../models/movie';
import { ActivatedRoute } from '@angular/router';

//see on võetud https://dev.to/dileno/build-a-simple-crud-app-with-angular-8-and-asp-net-core-2-2-part-1-back-end-39e1

@Component({
  selector: 'app-movie-post',
  templateUrl: './movie-post.component.html',
  styleUrls: ['./movie-post.component.css']
})
export class MoviePostComponent implements OnInit {

  moviePost$: Observable<Movie>;
  postId: number;

  constructor(private _moviePostService: MoviePostService, private avRoute: ActivatedRoute) {
    const idParam = 'id';
    if (this.avRoute.snapshot.params[idParam]) {
      this.postId = this.avRoute.snapshot.params[idParam];
    }
  }

  ngOnInit() {
    this.loadMoviePost();
  }

  loadMoviePost() {
    this.moviePost$ = this._moviePostService.getMoviePost(this.postId);
  }
} 
