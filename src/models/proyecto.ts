import { Categoria } from './categoria';
import { Color } from './color';
export class Proyecto {
  _id: string;
  nombre: string;
  descripcion: string;
  categoria: Categoria;
  subcategoria: string;
  paleta: Color[];
}
