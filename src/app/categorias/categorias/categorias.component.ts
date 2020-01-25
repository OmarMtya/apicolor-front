import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CategoriasService } from '../categorias.service';
import { Categoria } from '../../../models/categoria';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss']
})
export class CategoriasComponent implements OnInit {

  public categorias: Categoria[];
  @Output() seleccionado = new EventEmitter<Categoria>();

  constructor(private categoriasService: CategoriasService) { }

  ngOnInit() {
    this.categoriasService.getCategorias().then((data: Categoria[]) => {
      this.categorias = data;
    });
  }

  categoriaSeleccionada(categoria: Categoria){
    console.log("CATEGORIA SELECCIONADA");
    this.seleccionado.emit(categoria);
  }

}
