import { TestBed } from '@angular/core/testing';

import { ProductsSerService } from './products-ser.service';

describe('ProductsSerService', () => {
  let service: ProductsSerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsSerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
