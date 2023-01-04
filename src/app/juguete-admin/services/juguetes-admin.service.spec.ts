import { TestBed } from '@angular/core/testing';

import { JuguetesAdminService } from './juguetes-admin.service';

describe('StadiumsService', () => {
  let service: JuguetesAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JuguetesAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
