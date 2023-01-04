import { TestBed } from '@angular/core/testing';

import { ExperienciaAdminService } from './experiencia-admin.service';

describe('ExperienciaService', () => {
  let service: ExperienciaAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExperienciaAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
