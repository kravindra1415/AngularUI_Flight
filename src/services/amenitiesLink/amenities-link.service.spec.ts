import { TestBed } from '@angular/core/testing';

import { AmenitiesLinkService } from './amenities-link.service';

describe('AmenitiesLinkService', () => {
  let service: AmenitiesLinkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AmenitiesLinkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
