import { Component, OnInit } from '@angular/core';
import { PaletaService } from '../paleta.service';
import { Color } from '../../../models/color';
import { Monocromatica } from '../../../models/monocromatica';
import { ProyectosService } from '../../shared/proyectos.service';
import { Proyecto } from '../../../models/proyecto';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-paleta',
  templateUrl: './paleta.component.html',
  styleUrls: ['./paleta.component.scss']
})
export class PaletaComponent implements OnInit {

  public colores: ColoresPaleta;
  public proyecto: Proyecto;
  public cargando = true;

  constructor(
    private activeRouter: ActivatedRoute,
    private paletaService: PaletaService,
    private proyectoService: ProyectosService,
    private router: Router) { }

  ngOnInit() {
    const idProyecto = this.activeRouter.snapshot.paramMap.get('id');
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

  paletaSeleccionada(data: Color[], monocromatica = false) {

    if(confirm('¿Confirmar paleta?')){
      this.proyecto.paleta = data;
      const proyectoLocalStorage = localStorage.getItem('proyectos');
      if(proyectoLocalStorage){ // Si ya existe data dentro del localStorage
        const objetoProyectos: any[] = JSON.parse(proyectoLocalStorage);
        objetoProyectos.push(this.proyecto);
        localStorage.setItem('proyectos', JSON.stringify(objetoProyectos));
      } else { // Si no existen datos del localStorage
        const arregloProyectos = [];
        arregloProyectos.push(this.proyecto);
        localStorage.setItem('proyectos', JSON.stringify(arregloProyectos));
      }
      this.router.navigate(['/mis-proyectos']);
    }

  }
}


class ColoresPaleta {
  paletas: Color[][];
  monocromaticas: Monocromatica[];
}
