import { TestBed } from '@angular/core/testing';

import { InsertarProyectoService } from './insertar-proyecto.service';

describe('InsertarProyectoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InsertarProyectoService = TestBed.get(InsertarProyectoService);
    expect(service).toBeTruthy();
  });
});
