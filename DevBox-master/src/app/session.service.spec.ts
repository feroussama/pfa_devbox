import { TestBed, inject } from '@angular/core/testing';

import { SessionService } from 'C:/devbox_final/pfa_devbox/DevBox-master/src/app/services/session.service';

describe('SessionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SessionService]
    });
  });

  it('should be created', inject([SessionService], (service: SessionService) => {
    expect(service).toBeTruthy();
  }));
});
