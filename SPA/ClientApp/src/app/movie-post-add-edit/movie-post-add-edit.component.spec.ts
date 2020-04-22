import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviePostAddEditComponent } from './movie-post-add-edit.component';

describe('MoviePostAddEditComponent', () => {
  let component: MoviePostAddEditComponent;
  let fixture: ComponentFixture<MoviePostAddEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviePostAddEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviePostAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
