import { TestBed } from '@angular/core/testing';

import { ElementMrezeService } from './element-mreze.service';

describe('ElementMrezeService', () => {
  let service: ElementMrezeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ElementMrezeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
