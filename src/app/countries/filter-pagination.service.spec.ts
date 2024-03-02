import { TestBed } from '@angular/core/testing';

import { FilterPaginationService } from './filter-pagination.service';

describe('FilterPaginationService', () => {
  let service: FilterPaginationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilterPaginationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
