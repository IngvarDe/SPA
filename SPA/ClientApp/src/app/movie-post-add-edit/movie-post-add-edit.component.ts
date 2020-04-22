//import { Component, OnInit } from '@angular/core';
//import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { Router, ActivatedRoute } from '@angular/router';
//import { MoviePostService } from '../../services/movie-post.service';
//import { Movie } from '../../models/movie';
//import { Category } from '../../models/category';

//see on võetud https://dev.to/dileno/build-a-simple-crud-app-with-angular-8-and-asp-net-core-2-2-part-1-back-end-39e1

//@Component({
//  selector: 'app-movie-post-add-edit',
//  templateUrl: './movie-post-add-edit.component.html',
//  styleUrls: ['./movie-post-add-edit.component.scss']
//})
//export class MoviePostAddEditComponent implements OnInit {
//  form: FormGroup;
//  actionType: string;
//  formTitle: string;
//  formBody: string;
//  postId: number;
//  errorMessage: any;
//  existingMoviePost: Movie;

//  constructor(private _moviePostService: MoviePostService, private formBuilder: FormBuilder, private avRoute: ActivatedRoute, private router: Router) {
//    const idParam = 'id';
//    this.actionType = 'Add';
//    this.formTitle = 'title';
//    this.formBody = 'body';
//    if (this.avRoute.snapshot.params[idParam]) {
//      this.postId = this.avRoute.snapshot.params[idParam];
//    }

//    this.form = this.formBuilder.group(
//      {
//        postId: 0,
//        title: ['', [Validators.required]],
//        body: ['', [Validators.required]],
//      }
//    )
//  }

//  ngOnInit() {

//    if (this.postId > 0) {
//      this.actionType = 'Edit';
//      this._moviePostService.getMoviePost(this.postId)
//        .subscribe(data => (
//          this.existingMoviePost = data,
//          this.form.controls[this.formTitle].setValue(data.title),
//          this.form.controls[this.formBody].setValue(data.description)
//        ));
//    }
//  }

//  save() {
//    if (!this.form.valid) {
//      return;
//    }

    //if (this.actionType === 'Add') {
    //  let moviePost: Movie = {
    //    id: 100,
        
    //    //category: 'A',
    //    year: 2020,
    //    rating: 'Martin',
    //    title: this.form.get(this.formTitle).value,
    //    description: this.form.get(this.formBody).value
    //  };

    //  this._moviePostService.saveMoviePost(moviePost)
    //    .subscribe((data) => {
    //      this.router.navigate(['/moviepost', data.id]);
    //    });
    //}

  //  if (this.actionType === 'Edit') {
  //    category1: Category;

  //    let moviePost: Movie = {
  //      id: this.existingMoviePost.id,
  //      year: this.existingMoviePost.year,
  //      category: this.existingMoviePost.category,
  //      rating: this.existingMoviePost.description,
  //      title: this.form.get(this.formTitle).value,
  //      description: this.form.get(this.formBody).value
  //    };
  //    this._moviePostService.updateMoviePost(moviePost.id, moviePost)
  //      .subscribe((data) => {
  //        this.router.navigate([this.router.url]);
  //      });
  //  }
//  }

//  cancel() {
//    this.router.navigate(['/']);
//  }

//  get title() { return this.form.get(this.formTitle); }
//  get body() { return this.form.get(this.formBody); }
//}
