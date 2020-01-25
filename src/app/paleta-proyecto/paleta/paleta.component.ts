import { Component, OnInit } from '@angular/core';
import { PaletaService } from '../paleta.service';
import { Color } from '../../../models/color';
import { Monocromatica } from '../../../models/monocromatica';
import { ProyectosService } from '../../shared/proyectos.service';
import { Proyecto } from '../../../models/proyecto';

@Component({
  selector: 'app-paleta',
  templateUrl: './paleta.component.html',
  styleUrls: ['./paleta.component.scss']
})
export class PaletaComponent implements OnInit {

  public colores: ColoresPaleta;
  public proyecto: Proyecto;
  public cargando = true;

  constructor(private paletaService: PaletaService, private proyectoService: ProyectosService) { }

  ngOnInit() {
    Promise.all(
      [
        this.paletaService.getPaleta('5e2249d5fe1186c70261d864'),
        this.proyectoService.getProyecto('5e2249d5fe1186c70261d864')
      ]
    ).then((data: any[]) => {
      this.colores = data[0];
      this.proyecto = data[1];
      this.cargando = false;
    });

  }

}

class ColoresPaleta {
  paletas: Color[][];
  monocromaticas: Monocromatica[];
}
