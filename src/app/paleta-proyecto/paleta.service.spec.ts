import { TestBed } from '@angular/core/testing';

import { PaletaService } from './paleta.service';

describe('PaletaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PaletaService = TestBed.get(PaletaService);
    expect(service).toBeTruthy();
  });
});
