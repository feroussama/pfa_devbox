import { TestBed, inject } from '@angular/core/testing';

import { ValidpropService } from './validprop.service';

describe('ValidpropService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ValidpropService]
    });
  });

  it('should be created', inject([ValidpropService], (service: ValidpropService) => {
    expect(service).toBeTruthy();
  }));
});
