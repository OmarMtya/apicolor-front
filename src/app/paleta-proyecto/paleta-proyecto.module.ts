import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaletaComponent } from './paleta/paleta.component';
import { CargandoComponent } from '../shared/cargando/cargando.component';
import { AppModule } from '../app.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    PaletaComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class PaletaProyectoModule { }
