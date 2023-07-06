import { Component } from '@angular/core';
import ImagePath from 'src/app/commons/constants/Image-path';

@Component({
  selector: 'app-navbar-navigation',
  templateUrl: './navbar-navigation.component.html',
  styleUrls: ['./navbar-navigation.component.scss']
})
export class NavbarNavigationComponent {

  imagenCaja = ImagePath.IMG_CAJA;
  imagenInventario = ImagePath.IMG_INVENTARIO;
  imagenPrincipal = ImagePath.IMG_PRINCIPAL;
  imagenVentas = ImagePath.IMG_VENTAS;
}