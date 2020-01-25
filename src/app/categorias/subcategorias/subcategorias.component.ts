import { Component, OnInit, Input } from '@angular/core';
import { Categoria } from '../../../models/categoria';
import { Subcategoria } from '../../../models/subcategoria';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subcategorias',
  templateUrl: './subcategorias.component.html',
  styleUrls: ['./subcategorias.component.scss']
})
export class SubcategoriasComponent implements OnInit {

  @Input() categoriaSeleccionada: Categoria;

  constructor(private router: Router) { }

  ngOnInit() {

  }

  subcategoriaSeleccionada(subcategoria: Subcategoria){
    console.log(this.categoriaSeleccionada, subcategoria);
    this.router.navigate(['/insertarproyecto', this.categoriaSeleccionada._id, subcategoria.nombre]);
  }

}
