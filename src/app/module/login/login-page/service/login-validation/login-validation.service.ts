import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginEntity } from 'src/app/shared/entity/LoginEntity';

@Injectable({
  providedIn: 'root'
})
export class LoginValidationService {private API : string = "http://localhost:8080"; 

constructor(private clienteHttp: HttpClient){}

validarDatosLogin(datosLogin: LoginEntity) : Observable <any> {
  return this.clienteHttp.post(this.API + "EndPoint", datosLogin);
}
}
