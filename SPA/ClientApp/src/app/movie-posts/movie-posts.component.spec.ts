import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviePostsComponent } from './movie-posts.component';

describe('MoviePostsComponent', () => {
  let component: MoviePostsComponent;
  let fixture: ComponentFixture<MoviePostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviePostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviePostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
