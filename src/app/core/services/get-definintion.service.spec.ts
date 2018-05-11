import { TestBed, inject } from '@angular/core/testing';

import { GetDefinintionService } from './get-definintion.service';

describe('GetDefinintionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetDefinintionService]
    });
  });

  it('should be created', inject([GetDefinintionService], (service: GetDefinintionService) => {
    expect(service).toBeTruthy();
  }));
});
