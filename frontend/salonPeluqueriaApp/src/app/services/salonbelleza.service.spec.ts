import { TestBed } from '@angular/core/testing';

import { SalonbellezaService } from './salonbelleza.service';

describe('SalonbellezaService', () => {
  let service: SalonbellezaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SalonbellezaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
