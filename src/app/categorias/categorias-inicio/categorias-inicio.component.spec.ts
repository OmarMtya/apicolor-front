import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriasInicioComponent } from './categorias-inicio.component';

describe('CategoriasInicioComponent', () => {
  let component: CategoriasInicioComponent;
  let fixture: ComponentFixture<CategoriasInicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriasInicioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriasInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
