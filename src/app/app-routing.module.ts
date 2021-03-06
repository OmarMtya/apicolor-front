import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriasInicioComponent } from './categorias/categorias-inicio/categorias-inicio.component';
import { PaletaComponent } from './paleta-proyecto/paleta/paleta.component';
import { ProyectoNuevoComponent } from './insertar-proyecto/proyecto-nuevo/proyecto-nuevo.component';
import { MisProyectosComponent } from './mis-proyectos/mis-proyectos.component';


const routes: Routes = [
  { path: 'paleta/:id', component: PaletaComponent },
  { path: 'mis-proyectos', component: MisProyectosComponent },
  { path: 'categorias', component: CategoriasInicioComponent },
  { path: 'insertarproyecto/:idcategoria/:subcategoria', component: ProyectoNuevoComponent },
  { path: '', component: CategoriasInicioComponent },
  { path: '**', component: CategoriasInicioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
