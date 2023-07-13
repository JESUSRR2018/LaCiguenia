import { Component } from '@angular/core';
import ImagePath from 'src/app/commons/constants/Image-path';

@Component({
  selector: 'app-section-one',
  templateUrl: './section-one.component.html',
  styleUrls: ['./section-one.component.scss']
})
export class SectionOneComponent {

  imgVenta = ImagePath.IMG_VENTA_DIA;
  imgFactura = ImagePath.IMG_FACTURA_DIA;
  imgUtilidad = ImagePath.IMG_UTILIDAD_DIA;
  imgGastos = ImagePath.IMG_GASTOS_DIA;
}
