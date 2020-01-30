import { Component, OnInit } from '@angular/core';
import { Proyecto } from '../../models/proyecto';
import { Color } from '../../models/color';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mis-proyectos',
  templateUrl: './mis-proyectos.component.html',
  styleUrls: ['./mis-proyectos.component.scss']
})
export class MisProyectosComponent implements OnInit {

  proyectos: Proyecto[];

  constructor(private router: Router) { }

  ngOnInit() {
    const proyectos = (JSON.parse(localStorage.getItem('proyectos'))).reverse();
    this.proyectos = proyectos;
    console.log(this.proyectos);
  }

  copiarColor(color: Color, box: HTMLElement){
    const cleanText = color.hex.value.replace(/<\/?[^>]+(>|$)/g, '');
    const x = document.createElement('TEXTAREA') as HTMLTextAreaElement;
    x.value = cleanText;
    document.body.appendChild(x);
    x.select();
    document.execCommand('copy');
    document.body.removeChild(x);

    console.log(box);

    box.innerHTML = 'Copiado!';
    setTimeout(() => {
      box.innerHTML = color.name.value;
    }, 2000);

  }

  mostrarColor(color: Color, box: HTMLElement, entrando = false) {
    if(entrando){
      box.innerHTML = color.hex.value;
    } else {
      box.innerHTML = color.name.value;
    }
  }

}
