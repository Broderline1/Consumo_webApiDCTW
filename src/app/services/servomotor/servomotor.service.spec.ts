/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ServomotorService } from './servomotor.service';

describe('Service: Servomotor', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServomotorService]
    });
  });

  it('should ...', inject([ServomotorService], (service: ServomotorService) => {
    expect(service).toBeTruthy();
  }));
});
