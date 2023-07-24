import { Component, OnInit } from '@angular/core';
import Imagen from 'src/app/shared/imagen/Imagen';
import { DatosService } from '../../service/datos-service/datos.service';
import { Datos } from 'src/app/shared/interface/InterfaceDatos';

@Component({
  selector: 'app-section-one',
  templateUrl: './section-one.component.html',
  styleUrls: ['./section-one.component.scss']
})
export class SectionOneComponent implements OnInit{

  imgVenta = Imagen.IMG_VENTA_DIA;
  imgFactura = Imagen.IMG_FACTURA_DIA;
  imgGastos = Imagen.IMG_GASTOS_DIA;
  imgUtilidad = Imagen.IMG_UTILIDAD_DIA;
  ventasDelDia!: Datos;

  constructor(private datosService: DatosService){}

  ngOnInit(){
    this.datosVentasDelDia();
  }

  datosVentasDelDia(){
    this.datosService.datosVentasDelDia().subscribe(
      (data) => {
        this.ventasDelDia = data ?? { valor: 0 };
        console.log(this.ventasDelDia.valor);
      },
      (error) => {
        this.ventasDelDia = { valor: 0 };
        console.log('Error al obtener los datos', error);
      }
    );  
  }
}