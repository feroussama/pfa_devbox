import { TestBed, inject } from '@angular/core/testing';

import { ValidadminService } from './validadmin.service';

describe('ValidadminService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ValidadminService]
    });
  });

  it('should be created', inject([ValidadminService], (service: ValidadminService) => {
    expect(service).toBeTruthy();
  }));
});
