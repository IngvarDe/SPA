import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Movie } from '../models/movie';

//see on võetud https://dev.to/dileno/build-a-simple-crud-app-with-angular-8-and-asp-net-core-2-2-part-1-back-end-39e1

@Injectable({
  providedIn: 'root'
})
export class MoviePostService {

  myAppUrl: string;
  myApiUrl: string;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8'
    })
  };
  constructor(private http: HttpClient) {
    this.myAppUrl = environment.appUrl;
    this.myApiUrl = 'api/Movie';
  }

  getMoviePosts(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.myAppUrl + this.myApiUrl)
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }

  getMoviePost(postId: number): Observable<Movie> {
    return this.http.get<Movie>(this.myAppUrl + this.myApiUrl +'/'+ postId)
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }

  saveMoviePost(movie): Observable<Movie> {
    return this.http.post<Movie>(this.myAppUrl + this.myApiUrl, JSON.stringify(movie), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }

  updateMoviePost(postId: number, movie): Observable<Movie> {
    return this.http.put<Movie>(this.myAppUrl + this.myApiUrl + postId, JSON.stringify(movie), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }
  movie
  deleteMoviePost(postId: number): Observable<Movie> {
    return this.http.delete<Movie>(this.myAppUrl + this.myApiUrl + postId)
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }

  errorHandler(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
