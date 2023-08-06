import { Component } from '@angular/core';

@Component({
  selector: 'app-section-one',
  templateUrl: './section-one.component.html',
  styleUrls: ['./section-one.component.scss']
})
export class SectionOneComponent {

  nombreProducto: string = "nombre producto";
  codigo: string = "CO-001";
  valorProducto: number = 100;
  cantidad: number = 5;
  categoria: string = "Trajes";

  inventario = [
    { nombre: this.nombreProducto, codigo: this.codigo, valor: this.valorProducto,
      cantidad: this.cantidad, categoria: this.categoria},
    { nombre: this.nombreProducto, codigo: this.codigo, valor: this.valorProducto,
      cantidad: this.cantidad, categoria: this.categoria}
  ];
}