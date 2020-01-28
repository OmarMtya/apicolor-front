import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProyectoNuevoComponent } from './proyecto-nuevo/proyecto-nuevo.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ProyectoNuevoComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
  ]
})
export class InsertarProyectoModule { }
