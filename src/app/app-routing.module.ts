import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriasInicioComponent } from './categorias/categorias-inicio/categorias-inicio.component';
import { PaletaComponent } from './paleta-proyecto/paleta/paleta.component';
import { ProyectoNuevoComponent } from './insertar-proyecto/proyecto-nuevo/proyecto-nuevo.component';


const routes: Routes = [
  { path: 'paleta/:id', component: PaletaComponent },
  { path: 'categorias', component: CategoriasInicioComponent },
  { path: 'insertarproyecto/:idcategoria/:subcategoria', component: ProyectoNuevoComponent },
  { path: '', component: CategoriasInicioComponent },
  { path: '**', component: CategoriasInicioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
