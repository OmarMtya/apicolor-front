import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CargandoComponent } from './cargando/cargando.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HeaderComponent,
    CargandoComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    CargandoComponent,
    HeaderComponent
  ]
})
export class SharedModule { }
