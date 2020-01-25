import { Component, OnInit, Input } from '@angular/core';
import { Categoria } from '../../../models/categoria';

@Component({
  selector: 'app-categorias-inicio',
  templateUrl: './categorias-inicio.component.html',
  styleUrls: ['./categorias-inicio.component.scss']
})
export class CategoriasInicioComponent implements OnInit {

  public categoriaSeleccionada: Categoria;

  constructor() { }

  ngOnInit() {
  }

  seleccionandoCategoria(categoria: Categoria){
    console.log(categoria);
    this.categoriaSeleccionada = categoria;
  }

}
