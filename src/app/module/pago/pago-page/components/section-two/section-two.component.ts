import { Component } from '@angular/core';
import Imagen from 'src/app/shared/imagen/Imagen';

@Component({
  selector: 'app-section-two',
  templateUrl: './section-two.component.html',
  styleUrls: ['./section-two.component.scss']
})
export class SectionTwoComponent {
  imgNoEncontrada = Imagen.IMG_NO_ENCONTRADA;
  nombreProducto: string = "Nombre Producto";
  valorProducto: number = 0;

  filas = [1, 2, 3, 4, 5];

  productos = [
    { nombre: this.nombreProducto, valor: this.valorProducto },
    { nombre: this.nombreProducto, valor: this.valorProducto },
    { nombre: this.nombreProducto, valor: this.valorProducto },
    { nombre: this.nombreProducto, valor: this.valorProducto }
  ];
}
