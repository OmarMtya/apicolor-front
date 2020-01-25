import { Component, OnInit, Input } from '@angular/core';
import { Categoria } from '../../../models/categoria';

@Component({
  selector: 'app-categoria-individual',
  templateUrl: './categoria-individual.component.html',
  styleUrls: ['./categoria-individual.component.scss']
})
export class CategoriaIndividualComponent implements OnInit {

  @Input() categoria: Categoria;

  constructor() { }

  ngOnInit() {
    console.log(this.categoria);
  }

}
