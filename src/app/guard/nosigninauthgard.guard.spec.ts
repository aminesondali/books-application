import { TestBed, async, inject } from '@angular/core/testing';

import { NosigninauthGuard } from './nosigninauthgard.guard';

describe('NosigninauthgardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NosigninauthGuard]
    });
  });

  it('should ...', inject([NosigninauthGuard], (guard: NosigninauthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
