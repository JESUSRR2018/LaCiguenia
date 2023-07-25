import { Component } from '@angular/core';
import Imagen from 'src/app/shared/imagen/Imagen';
import { DatosService } from '../../service/datos-service/datos.service';
import { Datos } from 'src/app/shared/interface/InterfaceDatos';

@Component({
  selector: 'app-section-three',
  templateUrl: './section-three.component.html',
  styleUrls: ['./section-three.component.scss']
})
export class SectionThreeComponent {

  imgVenta = Imagen.IMG_VENTA_TOTAL;
  imgFactura = Imagen.IMG_FACTURA_TOTAL;
  imgGastos = Imagen.IMG_GASTOS_TOTAL;
  imgUtilidad = Imagen.IMG_UTILIDAD_TOTAL;
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
