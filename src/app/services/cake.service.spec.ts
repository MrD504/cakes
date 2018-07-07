import { TestBed, inject } from '@angular/core/testing';

import { CakeService } from './cake.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CakeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CakeService]
    });
  });

  it('should be created', inject([CakeService], (service: CakeService) => {
    expect(service).toBeTruthy();
  }));
});
