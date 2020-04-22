import { TestBed } from '@angular/core/testing';

import { MoviePostService } from './movie-post.service';

describe('MoviePostService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MoviePostService = TestBed.get(MoviePostService);
    expect(service).toBeTruthy();
  });
});
