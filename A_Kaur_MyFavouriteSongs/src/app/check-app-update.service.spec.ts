import { TestBed } from '@angular/core/testing';

import { CheckAppUpdateService } from './check-app-update.service';

describe('CheckAppUpdateService', () => {
  let service: CheckAppUpdateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckAppUpdateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
