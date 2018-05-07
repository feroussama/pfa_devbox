import { TestBed, inject } from '@angular/core/testing';

import { MService } from './m.service';

describe('MService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MService]
    });
  });

  it('should be created', inject([MService], (service: MService) => {
    expect(service).toBeTruthy();
  }));
});
