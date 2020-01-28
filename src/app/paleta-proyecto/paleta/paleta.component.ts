import { Component, OnInit } from '@angular/core';
import { PaletaService } from '../paleta.service';
import { Color } from '../../../models/color';
import { Monocromatica } from '../../../models/monocromatica';
import { ProyectosService } from '../../shared/proyectos.service';
import { Proyecto } from '../../../models/proyecto';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-paleta',
  templateUrl: './paleta.component.html',
  styleUrls: ['./paleta.component.scss']
})
export class PaletaComponent implements OnInit {

  public colores: ColoresPaleta;
  public proyecto: Proyecto;
  public cargando = true;

  constructor(private activeRouter: ActivatedRoute, private paletaService: PaletaService, private proyectoService: ProyectosService) { }

  ngOnInit() {
    var idProyecto = this.activeRouter.snapshot.paramMap.get('id');
    Promise.all(
      [
        this.paletaService.getPaleta(idProyecto),
        this.proyectoService.getProyecto(idProyecto)
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
