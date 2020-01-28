import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CategoriasModule } from './categorias/categorias.module';
import { HeaderComponent } from './shared/header/header.component';
import { PaletaProyectoModule } from './paleta-proyecto/paleta-proyecto.module';
import { CargandoComponent } from './shared/cargando/cargando.component';
import { SharedModule } from './shared/shared.module';
import { InsertarProyectoModule } from './insertar-proyecto/insertar-proyecto.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CategoriasModule,
    PaletaProyectoModule,
    SharedModule,
    InsertarProyectoModule,
    RouterModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent],
  exports: [
  ]
})
export class AppModule { }
