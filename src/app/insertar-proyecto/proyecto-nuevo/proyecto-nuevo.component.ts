import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { InsertarProyectoService } from '../insertar-proyecto.service';
import { Categoria } from '../../../models/categoria';
import { Proyecto } from '../../../models/proyecto';

@Component({
  selector: 'app-proyecto-nuevo',
  templateUrl: './proyecto-nuevo.component.html',
  styleUrls: ['./proyecto-nuevo.component.scss']
})
export class ProyectoNuevoComponent implements OnInit {

  idCategoria: string;
  subcategoria: string;
  categoria: Categoria;

  constructor(private activeRouter: ActivatedRoute, private insertarProyecto: InsertarProyectoService, private router: Router) { }

  ngOnInit() {
    this.idCategoria = this.activeRouter.snapshot.paramMap.get('idcategoria');
    this.subcategoria = this.activeRouter.snapshot.paramMap.get('subcategoria');
    console.log(this.idCategoria);
    console.log(this.subcategoria);

    this.insertarProyecto.getCategoria(this.idCategoria).then((data: Categoria) => {
      this.categoria = data;
    });
  }

  postProyecto(formulario: NgForm){
    if(!formulario.valid){
      return;
    }
    console.log(formulario.value);
    this.insertarProyecto.insertarProyecto(
      {
        nombre: formulario.value.nombre,
        descripcion: formulario.value.descripcion,
        categoria: this.idCategoria,
        subcategoria: this.subcategoria,
      }).then((data: Proyecto) => {
        console.log(data);
        this.router.navigate(['paleta', data._id]);
      }).catch((data) => {
        console.log(data);
      });
  }

}
