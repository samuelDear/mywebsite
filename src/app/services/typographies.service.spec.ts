import { TestBed } from '@angular/core/testing';

import { TypographiesService } from './typographies.service';

describe('TypographiesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TypographiesService = TestBed.get(TypographiesService);
    expect(service).toBeTruthy();
  });
});
