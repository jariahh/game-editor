import { TestBed, inject } from '@angular/core/testing';

import { MenuServicesService } from './menu-services.service';

describe('MenuServicesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MenuServicesService]
    });
  });

  it('should be created', inject([MenuServicesService], (service: MenuServicesService) => {
    expect(service).toBeTruthy();
  }));
});
