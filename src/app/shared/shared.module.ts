import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CargandoComponent } from './cargando/cargando.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    HeaderComponent,
    CargandoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CargandoComponent,
    HeaderComponent
  ]
})
export class SharedModule { }
