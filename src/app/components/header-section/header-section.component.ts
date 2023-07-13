import { Component } from '@angular/core';
import ImagePath from 'src/app/commons/constants/Image-path';

@Component({
  selector: 'app-header-section',
  templateUrl: './header-section.component.html',
  styleUrls: ['./header-section.component.scss']
})
export class HeaderSectionComponent {

  imgWhatsapp = ImagePath.IMG_WHATSAPP;
  imgUsuario = ImagePath.IMG_USUARIO;
  imgNotificaciones = ImagePath.IMG_NOTIFICACION;
}
