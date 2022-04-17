import { TestBed } from '@angular/core/testing';

import { FavsongsService } from './favsongs.service';

describe('FavsongsService', () => {
  let service: FavsongsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavsongsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
