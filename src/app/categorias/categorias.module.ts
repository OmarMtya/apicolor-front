import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriasComponent } from './categorias/categorias.component';
import { CategoriaIndividualComponent } from './categoria-individual/categoria-individual.component';
import { CategoriasInicioComponent } from './categorias-inicio/categorias-inicio.component';
import { SubcategoriasComponent } from './subcategorias/subcategorias.component';



@NgModule({
  declarations: [CategoriasComponent, CategoriaIndividualComponent, CategoriasInicioComponent, SubcategoriasComponent],
  imports: [
    CommonModule
  ],
  exports: [
  ]
})
export class CategoriasModule { }
